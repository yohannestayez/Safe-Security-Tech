from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import json
import os
import jwt
from functools import wraps

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'  # Change this to a secure secret key
MESSAGES_FILE = 'messages.json'
ADMIN_CREDENTIALS = {
    'email': 'admin@safesecurity.com',
    'password': 'admin123'  # Change this to a secure password
}

# Helper functions
def load_messages():
    if os.path.exists(MESSAGES_FILE):
        with open(MESSAGES_FILE, 'r') as f:
            messages = json.load(f)
            # Convert to list if it's not already
            if not isinstance(messages, list):
                messages = []
            # Ensure all messages have required fields
            for msg in messages:
                msg['read'] = msg.get('is_read', False)  # Convert is_read to read
                msg['created_at'] = msg.get('submission_date', datetime.now().isoformat())
            return messages
    return []

def save_messages(messages):
    with open(MESSAGES_FILE, 'w') as f:
        json.dump(messages, f, indent=2)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token is missing'}), 401

        try:
            token = token.split(' ')[1]  # Remove 'Bearer ' prefix
            jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        except:
            return jsonify({'error': 'Invalid token'}), 401

        return f(*args, **kwargs)
    return decorated

# Routes
@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    
    # Validate required fields
    required_fields = ['name', 'email', 'subject', 'message']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'error': f'{field} is required'}), 400

    # Validate field lengths
    if len(data['subject']) > 100:
        return jsonify({'error': 'Subject must be less than 100 characters'}), 400
    if len(data['message']) > 500:
        return jsonify({'error': 'Message must be less than 500 characters'}), 400

    # Create new message
    messages = load_messages()
    new_message = {
        'id': len(messages) + 1,
        'name': data['name'],
        'email': data['email'],
        'phone': data.get('phone', ''),  
        'subject': data['subject'],
        'message': data['message'],
        'submission_date': datetime.now().isoformat(),
        'is_read': False
    }
    
    messages.append(new_message)
    save_messages(messages)
    
    return jsonify({'message': 'Message sent successfully'}), 201

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    
    if (data.get('email') == ADMIN_CREDENTIALS['email'] and 
        data.get('password') == ADMIN_CREDENTIALS['password']):
        token = jwt.encode(
            {
                'user': data['email'],
                'exp': datetime.utcnow() + timedelta(hours=24)
            },
            app.config['SECRET_KEY']
        )
        return jsonify({'access_token': token}), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/admin/messages', methods=['GET'])
@token_required
def get_messages():
    try:
        messages = load_messages()
        # Sort messages by date (newest first)
        messages.sort(key=lambda x: x['created_at'], reverse=True)
        return jsonify(messages), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/messages/<message_id>', methods=['PUT'])
@token_required
def update_message(message_id):
    try:
        data = request.get_json()
        messages = load_messages()
        
        for msg in messages:
            if str(msg['id']) == str(message_id):
                msg['read'] = data.get('read', msg.get('read', False))
                save_messages(messages)
                return jsonify(msg), 200
        
        return jsonify({'error': 'Message not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/dashboard', methods=['GET'])
@token_required
def get_dashboard_summary():
    try:
        messages = load_messages()
        total_messages = len(messages)
        unread_messages = sum(1 for msg in messages if not msg.get('read', False))
        
        # Get the latest message
        latest_message = None
        if messages:
            messages.sort(key=lambda x: x['created_at'], reverse=True)
            latest_message = messages[0]
        
        return jsonify({
            'total_messages': total_messages,
            'unread_messages': unread_messages,
            'latest_message': latest_message
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/messages/bulk-delete', methods=['POST'])
@token_required
def bulk_delete_messages():
    try:
        data = request.get_json()
        message_ids = data.get('message_ids', [])
        
        if not message_ids:
            return jsonify({'error': 'No message IDs provided'}), 400
        
        messages = load_messages()
        original_count = len(messages)
        messages = [msg for msg in messages if str(msg['id']) not in map(str, message_ids)]
        
        if len(messages) == original_count:
            return jsonify({'error': 'No messages were deleted'}), 404
        
        save_messages(messages)
        return jsonify({'message': 'Messages deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
