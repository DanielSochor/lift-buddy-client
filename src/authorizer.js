import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL || '/'
//const baseUrl = 'https://healthy-people-back-end.herokuapp.com/'

function Auth() {
    //console.log('auth called');
    let test = {
        email_address: 'danielsochor@gmail.com'
    };
    console.log('test 0 key is: ' + Object.keys(test)[0]);
    console.log('test 0 value is: ' + Object.values(test)[0]);
    axios.post(baseUrl + 'api/user', test)
        .then(response => {
            console.log('response is: ');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
}

export default Auth;