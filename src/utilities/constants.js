// Global name of the application
export const APP_NAME = 'Lift Buddy';

// set baseURL
//TODO does it make sense to define this on the front-end?
const baseURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

// Notification strings for pubsub
export const NOTIF = {
    LOG_IN: 'login',
    LOG_OUT: 'logout',
    SIGN_UP: 'signup',
    AUTH_ERROR: 'auth_error',
    TOGGLE_SIDEBAR_MOBILE: 'toggle_sidebar_mobile'
};

// API routes
export const API = {
    getUserInfo: 'api/user/userinfo',
    login: 'api/user/login',
    logout: 'api/user/logout',
    signup: 'api/user/signup'
};