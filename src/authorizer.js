//require('../../LiftBuddy-Client/dotenv');
import axios from 'axios';

// console.log('process.env is: ');
// console.log(process.env);
// console.log('process.env.NODE_ENV is: ');
// console.log(process.env.NODE_ENV);
// console.log('process.env.REACT_APP_LOCAL_URL is: ');
// console.log(process.env.REACT_APP_LOCAL_URL);
// console.log('process.env.REACT_APP_SERVER_URL is: ');
// console.log(process.env.REACT_APP_SERVER_URL);

//var baseUrl = (process.env.NODE_ENV == 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

// var baseUrl = process.env.REACT_APP_LOCAL_URL;

// if (process.env.NODE_ENV === 'development') {
//     baseUrl = process.env.REACT_APP_LOCAL_URL;
//     console.log('local');
//     console.log(baseUrl);
// } else {
//     baseUrl = process.env.REACT_APP_SERVER_URL;
//     console.log('production');
//     console.log(baseUrl);
// }

//console.log('baseURL is: ');
//console.log(baseURL);

//console.log(process.env.NODE_ENV);

function Auth() {
    if (process.env.NODE_ENV !== 'production') {
        let test = {
            email_address: 'Dev@gmail.com'
        };
        axios.post(process.env.REACT_APP_LOCAL_URL + 'api/user', test)
        .then(response => {
            console.log('local URL is: ');
            console.log(process.env.REACT_APP_LOCAL_URL);
            console.log('response is: ');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    } else {
        let test = {
            email_address: 'Prod@gmail.com'
        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'api/user', test)
        .then(response => {
            console.log('server URL is: ');
            console.log(process.env.REACT_APP_SERVER_URL);
            console.log('response is: ');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    // console.log('baseURL is: ');
    // console.log(baseUrl);
}

export default Auth;