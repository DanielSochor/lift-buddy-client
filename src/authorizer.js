import axios from 'axios';

//const baseUrl = process.env.REACT_APP_SERVER_URL|| '/'
const baseUrl = 'https://healthy-people-back-end.herokuapp.com/'

    (function (obj) {
        obj.test = () => {
            axios.get(baseUrl + 'api/user')
                .then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
        }
    })(Auth);

    export default Auth;