import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL|| '/'
//const baseUrl = 'https://healthy-people-back-end.herokuapp.com/'

function Auth() {
    console.log('auth called');
    let test = {
        'email_address' : 'test'
      };
    axios.post(baseUrl + 'api/user',test)
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default Auth;