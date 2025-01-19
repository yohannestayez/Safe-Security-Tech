# Safe Security Tech Backend

The backend service for the Safe Security Tech application, built with Flask and SQLAlchemy.

## 🛠️ Technology Stack

- **Flask**: Web framework
- **SQLAlchemy**: ORM for database operations
- **Flask-Migrate**: Database migration management
- **Flask-JWT-Extended**: JWT authentication
- **Flask-CORS**: Handle Cross-Origin Resource Sharing

## 📋 API Endpoints

### Authentication
- `POST /api/auth/login`: User login
- `POST /api/auth/register`: User registration
- `POST /api/auth/admin/login`: Admin login

### User Management
- `GET /api/users`: Get all users (Admin only)
- `GET /api/users/<id>`: Get specific user
- `PUT /api/users/<id>`: Update user
- `DELETE /api/users/<id>`: Delete user

### Security Management
- `POST /api/incidents`: Report new incident
- `GET /api/incidents`: Get all incidents
- `GET /api/incidents/<id>`: Get specific incident
- `PUT /api/incidents/<id>`: Update incident status

## 🗄️ Database Schema

The application uses SQLite in development and can be configured for PostgreSQL in production.

### Tables
- Users
- Admins
- Incidents
- SecurityLogs

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

5. Initialize database:
   ```bash
   flask db upgrade
   ```

6. Run the development server:
   ```bash
   python app.py
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
