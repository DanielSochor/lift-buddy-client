//require('../../LiftBuddy-Client/dotenv');
import axios from 'axios';

console.log('process.env.NODE_ENV is: ');
console.log(process.env.NODE_ENV);

//const baseUrl = process.env.REACT_APP_SERVER_URL
//const baseUrl = process.env.REACT_APP_SERVER_URL || '/'
//const baseUrl = 'https://healthy-people-back-end.herokuapp.com/'

const baseUrl = (process.env.NODE_ENV === 'production')? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

// var baseUrl = '';

// if (process.env.NODE_ENV !== 'production') {
//     baseUrl = process.env.REACT_APP_LOCAL_URL;
//     console.log('local');
//     console.log(baseUrl);
// } else {
//     baseUrl = process.env.REACT_APP_SERVER_URL;
//     console.log('production');
//     console.log(baseUrl);
// }

function Auth() {
    let test = {
        email_address: 'danielsochor@gmail.com'
    };
    //console.log('test 0 key is: ' + Object.keys(test)[0]);
    //console.log('test 0 value is: ' + Object.values(test)[0]);
    console.log('Auth called');
    axios.get(baseUrl + 'api/user', test)
        .then(response => {
            console.log('response is: ');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
}

export default Auth;