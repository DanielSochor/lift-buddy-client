require('dotenv').config();
console.log(process.env.NODE_ENV);
console.log(process.env.REACT_APP_SERVER_URL );
const baseUrl = process.env.REACT_APP_SERVER_URL || '/'
axios.get(baseUrl + 'api/user', test);