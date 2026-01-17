let backendUrl;

if (process.env.NODE_ENV === 'production') {
    backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://finance-x-backend.vercel.app'; 
} else {
    backendUrl = import.meta.env.VITE_BACKEND_URL_DEV || 'http://localhost:5000';
}

export { backendUrl };