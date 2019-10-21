//require('../../LiftBuddy-Client/dotenv');
import axios from 'axios';

//const baseUrl = process.env.REACT_APP_SERVER_URL
//const baseUrl = process.env.REACT_APP_SERVER_URL || '/'
const baseUrl = 'https://healthy-people-back-end.herokuapp.com/'

//const baseUrl = (process.env.NODE_ENV === 'production')? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL

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