//require('../../LiftBuddy-Client/dotenv');
import axios from 'axios';

console.log('process.env.NODE_ENV is: ');
console.log(process.env.NODE_ENV);

const baseUrl = (process.env.NODE_ENV === 'production')? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL;

console.log(process.env.NODE_ENV);

function Auth() {
    let test = {
        email_address: 'danielsochor@gmail.com'
    };
    console.log('Auth called');
    axios.post(baseUrl + 'api/user', test)
        .then(response => {
            console.log('response is: ');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
}

export default Auth;