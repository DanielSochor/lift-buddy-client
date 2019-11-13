import axios from 'axios';

console.log('process.env is: ');
console.log(process.env);

//Can we somehow include this in the future:
//var baseUrl = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

function Auth() {
    if (process.env.NODE_ENV === 'production') {
        var baseURL = process.env.REACT_APP_SERVER_URL
        let test = {
            email_address: 'production@gmail.com'
        };
        axios.post(baseURL + 'api/user', test)
            .then(response => {
                console.log('response is: ');
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    } else if (process.env.NODE_ENV === 'development') {
        var baseURL = process.env.REACT_APP_LOCAL_URL
        let test = {
            email_address: 'development@gmail.com'
        };
        axios.post(baseURL + 'api/user', test)
            .then(response => {
                console.log('response is: ');
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    } else {
        console.log('development environment is not production or development');
    };
}

export default Auth;