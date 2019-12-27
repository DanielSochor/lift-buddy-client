import axios from 'axios';
import Pubsub from './pubsub';
import { API, NOTIF } from './constants';
//import { shallowCopyObj, deepCopyObj } from './helper';
import { deepCopyObj } from './helper';
//import Data from './data';

var Auth = {};

var user = {};

(function (obj) {
    // @TODO 

    const baseURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;
    console.log('baseURL is: ' + baseURL);
    console.log('local storage');
    console.log(localStorage);

    obj.checkForExistingSession = () => {
        let session_token = localStorage.getItem('x-session-token');
        if (session_token) {
            console.log('session token exists');
            console.log('session token is: ' + session_token);
            obj.getUserInfo(session_token);
        } else {
            console.log('no session token exists');
        }
    }

    obj.sendLogInRequest = (logInObj) => {
        console.log('authorizer sendLogInRequest log in object is: ');
        console.log(logInObj);
        if (validateLogInRequest(logInObj)) {
            console.log('API Login is: ' + API.login);
            axios.post(baseURL + API.login, logInObj)
                .then(logInResponse => {
                    console.log('successful hit of API.login');
                    console.log('logInResponse is');
                    console.log(logInResponse);
                    let session_token = logInResponse.headers['x-session-token'];
                    localStorage.setItem('x-session-token', session_token);
                    console.log('session token is: ');
                    console.log(session_token);
                    obj.getUserInfo(session_token);
                }).catch(error => {
                    let errorObj = {
                        message: 'Error logging in, please try again'
                    };
                    Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                });
        } else {
            let errorObj = {
                message: 'Please fill in the required fields'
            };
            Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
        }
    }

    obj.sendSignUpRequest = (params) => {
        if (validateSignUpRequest(params)) {
            console.log('API signup is: ' + API.signup);
            axios.post(baseURL + API.signup, {
                first_name: params.first_name,
                last_name: params.last_name,
                username: params.username,
                email_address: params.email_address,
                password: params.password,
                password_confirm: params.password_confirm
            }).then(response => {
                console.log('response is: ');
                console.log(response);
                let logInObj = {
                    username: params.username,
                    password: params.password
                };
                console.log('authorizer sendSignUpRequest log in object is: ');
                console.log(logInObj);
                obj.sendLogInRequest(logInObj);
            })
        } else {
            console.log('Sign up request did not validate');
        }
    }

    obj.getUserInfo = (session_token) => {
        axios.get(baseURL + API.getUserInfo, { headers: { 'x-session-token': session_token } })
            .then(response => {
                if (validateUserData(response.data)) {
                    user = deepCopyObj(response.data);
                    Pubsub.publish(NOTIF.LOG_IN, null);
                }
                console.log('deep copied user is: ');
                console.log(user);
            }).catch(error => {
                console.log(error);
            });
    }

    obj.sendLogOutRequest = () => {
        let session_token = localStorage.getItem('x-session-token');
        axios({
            url: baseURL + API.logout,
            method: 'delete',
            headers: {
                'x-session-token': session_token
            }
        }).then(response => {
            if (response.status === 200) {
                user = {};
                localStorage.setItem('x-session-token', '');
                Pubsub.publish(NOTIF.LOG_OUT, null);
                //Data.handleSignout();
                console.log('signout success');
            } else {
                // @TODO not sure what to do in a .then handler here
                console.log('signout resolved, but not status 200');
            }
        }).catch(error => {
            console.log(error);
        });  
    }

})(Auth);

const validateSignUpRequest = (params) => {
    if (params.first_name &&
        params.last_name &&
        params.username &&
        params.email_address &&
        params.password &&
        params.password_confirm) {
        return true;
    } else {
        return false;
    }
};

const validateLogInRequest = (logInObj) => {
    if (logInObj.username &&
        logInObj.password) {
        return true;
    } else {
        return false;
    }
};

const validateUserData = (data) => {
    if (
        data.user_id &&
        data.first_name &&
        data.last_name &&
        data.username &&
        data.email_address &&
        data.created &&
        data.updated
    ) {
        console.log("user data validates as true");
        return true
    }
    console.log("user data validates as false");
    return false;
}

export default Auth;

export {
    user
};

// console.log('process.env is: ');
// console.log(process.env);

// //Can we somehow include this in the future:
// //var baseURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_URL;

// function Auth() {
//     var baseURL = '';
//     if (process.env.NODE_ENV === 'production') {
//         baseURL = process.env.REACT_APP_SERVER_URL
//         let test = {
//             email_address: 'production@gmail.com'
//         };
//         axios.post(baseURL + 'api/user', test)
//             .then(response => {
//                 console.log('response is: ');
//                 console.log(response);
//             }).catch(error => {
//                 console.log(error);
//             });
//     } else if (process.env.NODE_ENV === 'development') {
//         baseURL = process.env.REACT_APP_LOCAL_URL
//         let test = {
//             email_address: 'development@gmail.com'
//         };
//         axios.post(baseURL + 'api/user', test)
//             .then(response => {
//                 console.log('response is: ');
//                 console.log(response);
//             }).catch(error => {
//                 console.log(error);
//             });
//     } else {
//         console.log('development environment is not production or development');
//     };
// }

// export default Auth;