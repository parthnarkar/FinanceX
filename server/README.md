# Flask Backend for Gemini-HackDay

This is a simple Flask backend that runs on Vercel.

## Setup Instructions

### Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the development server:
```bash
python api/index.py
```

The server will start at `http://localhost:5000`

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel deploy
```

## API Endpoints

- **GET** `/` - Health check endpoint
- **GET** `/api/hello?name=YourName` - Simple hello endpoint
- **POST** `/api/test` - Test POST endpoint

## Environment Variables

Add any environment variables needed in `vercel.json` or through Vercel dashboard.

## Project Structure

```
server/
├── api/
│   └── index.py      # Main Flask application
├── vercel.json       # Vercel configuration
├── requirements.txt  # Python dependencies
└── README.md        # This file
```
