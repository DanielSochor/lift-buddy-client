import axios from 'axios';

//const baseUrl = process.env.REACT_APP_SERVER_URL|| '/'
const baseUrl = 'http://localhost:3000/'

function Auth() {

    axios.get(baseUrl + 'api/user')
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default Auth;