let backendUrl;

if (process.env.NODE_ENV === 'production') {
    backendUrl = import.meta.env.VITE_BACKEND_URL; 
} else {
    backendUrl = import.meta.env.VITE_BACKEND_URL_DEV;
}

export { backendUrl };