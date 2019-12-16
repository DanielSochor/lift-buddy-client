// set baseURL
const baseURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

// Notification strings for pubsub
export const NOTIF = {
};

// API routes
export const API = {
    getUserInfo: 'api/user/userinfo',
    login: 'api/user/login',
    logout: 'api/user/logout',
    signup: 'api/user/signup'
};