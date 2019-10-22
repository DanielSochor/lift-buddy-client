//require('../../LiftBuddy-Client/dotenv');
import axios from 'axios';

console.log('process.env.NODE_ENV is: ');
console.log(process.env.NODE_ENV);

const baseUrl = (process.env.NODE_ENV === 'production')? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

function Auth() {
    let test = {
        email_address: 'DanielSochor@gmail.com'
    };
    //console.log('test 0 key is: ' + Object.keys(test)[0]);
    //console.log('test 0 value is: ' + Object.values(test)[0]);
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