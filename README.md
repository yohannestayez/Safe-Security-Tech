# Safe Security Tech

A comprehensive security management system built with React and Flask, designed to provide robust security solutions for organizations.

## Features

- User authentication and authorization
- Admin dashboard for security management
- Real-time security monitoring
- Incident reporting and tracking
- User management system
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- Material-UI
- React Router
- Axios for API calls

### Backend
- Flask (Python)
- SQLAlchemy for database management
- Flask-Migrate for database migrations
- JSON Web Tokens (JWT) for authentication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn
- pip (Python package manager)

## Installation

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yohannestayez/Safe-Security-Tech.git
   cd safe-security-tech
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python app.py
   ```
   The backend API will be available at `http://localhost:5000`

## Project Structure

```
safe-security-tech/
├── src/                    # Frontend source files
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── styles/            # CSS and styling files
│   └── utils/             # Utility functions
├── backend/               # Backend Flask application
│   ├── app.py            # Main Flask application
│   ├── migrations/       # Database migrations
│   └── requirements.txt  # Python dependencies
├── public/               # Static files
├── Screenshots/          # Screenshots of the application
└── package.json         # Frontend dependencies
```

## 📸 Screenshots

The `Screenshots` folder contains images that demonstrate the application's user interface and functionality. These screenshots can be useful for understanding how the application looks and operates.

## Environment Variables

Create a `.env` file in both the root and backend directories:

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
```

Backend (.env):
```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_secret_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

feel free to modify and use this project 
