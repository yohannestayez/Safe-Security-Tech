# Safe Security Tech Backend

The backend service for the Safe Security Tech application, built with Flask.

## 🛠️ Technology Stack

- **Flask**: Web framework
- **Flask-JWT-Extended**: JWT authentication
- **Flask-CORS**: Handle Cross-Origin Resource Sharing

## 🗄️ File Structure

- **app.py**: Main application file that initializes the Flask app and defines the routes.
- **messages.json**: Contains data related to messages or incidents. This file is used to store all messages submitted through the application.
- **migrations/**: Directory for migration scripts, which is not used in this application as it does not connect to a database.
- **requirements.txt**: Lists all the required Python packages for the backend. Install them using `pip install -r requirements.txt`.
- **venv/**: Directory for the virtual environment. Activate it before running the application.

## 🚀 Running the Application

To run the application, ensure your virtual environment is activated and execute:
```bash
python app.py
```

The backend API will be available at `http://localhost:5000`.

## 🔄 Data Storage

This application does not use a traditional database; instead, it stores messages in the `messages.json` file. This approach is suitable for smaller applications but may have limitations in terms of performance and scalability as the amount of data grows.

## 🔧 Development Setup

1. Create virtual environment:
   ```bash
   python -m venv venv
   ```

2. Activate virtual environment:
   - Windows: `venv\Scripts\activate`
   - Unix/MacOS: `source venv/bin/activate`

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   export FLASK_APP=app.py
   export FLASK_ENV=development
   export SECRET_KEY=your_secret_key
   ```

## 🔍 Testing

Run tests using:
```bash
python -m pytest
```

## 📦 Deployment

1. Set production environment variables
2. Update database configuration
3. Run database migrations
4. Configure WSGI server (e.g., Gunicorn)

## 🔐 Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are used for authentication
- CORS is properly configured
- Input validation on all endpoints
- Rate limiting on authentication endpoints
