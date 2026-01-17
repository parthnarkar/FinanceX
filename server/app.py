from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/', methods=['GET'])
def home():
    """Health check endpoint"""
    return jsonify({
        'status': 'success',
        'message': 'Flask backend is running on Vercel!',
        'version': '1.0.0'
    }), 200

@app.route('/api/hello', methods=['GET'])
def hello():
    """Simple hello endpoint"""
    name = request.args.get('name', 'World')
    return jsonify({
        'status': 'success',
        'message': f'Hello, {name}!'
    }), 200

@app.route('/api/test', methods=['POST'])
def test():
    """Test endpoint for POST requests"""
    data = request.get_json()
    return jsonify({
        'status': 'success',
        'received': data,
        'message': 'Data received successfully'
    }), 200

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        'status': 'error',
        'message': 'Endpoint not found'
    }), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({
        'status': 'error',
        'message': 'Internal server error'
    }), 500

if __name__ == '__main__':
    # For local development
    app.run(debug=True, host='0.0.0.0', port=5000)
