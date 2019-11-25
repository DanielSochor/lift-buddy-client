import axios from 'axios';

import Pubsub from './pubsub';
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
            //axios.get(API.getUsers, { headers: { 'x-session-token': session_token } }).then(response => {
            axios.get(baseURL + 'api/users', { headers: { 'x-session-token': session_token } }).then(response => {
                if (validateUserData(response.data)) {
                    user = deepCopyObj(response.data);
                    console.log('deep copy of user is: ');
                    console.log(user);
                    console.log('user is validated');
                }
                if (user === {}) {
                    console.log('no existing session');
                } else {
                    console.log('existing session');
                }
                //Pubsub.publish(NOTIF.SIGN_IN, null);
                Pubsub.publish('login', null);
            }).catch(error => {
                console.log('session check failed');
                console.log(error);
            });
        } else {
            console.log('no session token exists');
        }
    }

    obj.sendSigninRequest = (params) => {
        // API require email OR alias
        // forcing username at the moment - may implement more elegant logic later
        if (validateSigninRequest(params)) {
            let signinObj = {
                username: params.username,
                password: params.password
            };
            // this extra call is not ideal, but we need to hack our way to getting the correct info on signin.  In the future, the API will need to be refactored to send back all the necessary info
            console.log('pre sign in');
            console.log(signinObj);
            //axios.post(API.signin, signinObj).then(response => {
            console.log(baseURL + 'api/users/login');
            axios.post(baseURL + 'api/users/login', signinObj).then(response => {
                let session_token = response.headers['x-session-token'];
                localStorage.setItem('x-session-token', session_token);
                //axios.get(API.getUsers, { headers: { 'x-session-token': session_token } }).then(response => {
                axios.get(baseURL + 'api/users', { headers: { 'x-session-token': session_token } }).then(response => {
                    user = deepCopyObj(response.data);
                    console.log('attempt at /api/user')
                    console.log(user);
                    //Pubsub.publish(NOTIF.SIGN_IN, null);
                    Pubsub.publish('login', null);
                }).catch(error => {
                    console.log(error);
                    let errorObj = {
                        message: 'Error signing in, please try again'
                    };
                    //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                    Pubsub.publish('auth_error', errorObj);
                });
            }).catch(error => {
                // @TODO return error codes and display helpful messages to the user, i.e. incorrect password, etc.
                // Potentially make more DRY
                let errorObj = {
                    message: 'Error signing in, please try again'
                };
                //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                Pubsub.publish('auth_error', errorObj);
            });
        } else {
            let errorObj = {
                message: 'Please fill in the required fields'
            };
            //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
            Pubsub.publish('auth_error', errorObj);
        }
    }

    obj.sendSignupRequest = (params) => {
        if (validateSignupRequest(params)) {
            console.log('sent signup request');
            //axios.post(API.signup, {
            axios.post(baseURL + 'api/users', {
                first_name: params.first_name,
                last_name: params.last_name,
                username: params.username,
                email_address: params.email_address,
                password: params.password,
                password_confirm: params.password_confirm
            }).then(response => {
                let signinObj = {
                    username: params.username,
                    email_address: params.email_address,
                    password: params.password
                };
                console.log('signin object is: ')
                console.log(signinObj);
                // these TWO extra calls are not ideal, but we need to hack our way to getting the correct info on signup.  In the future, the API will need to be refactored to send back all the necessary info
                //axios.post(API.signin, signinObj).then(signinResp => {

                //axios.get(baseURL + '/api/users/signup').then(

                axios.post(baseURL + 'api/users/login', signinObj).then(signinResp => {
                    console.log('sign in response');
                    console.log(signinResp.headers);
                    let session_token = signinResp.headers['x-session-token'];
                    console.log('session token is');
                    console.log(session_token);
                    localStorage.setItem('x-session-token', session_token);
                    //axios.get(API.getUsers, { headers: { 'x-session-token': session_token } }).then(getResponse => {
                    axios.get(baseURL + 'api/users', { headers: { 'x-session-token': session_token } }).then(getResponse => {
                        user = deepCopyObj(getResponse.data);
                        console.log('post to login:')
                        console.log(user);
                        //Pubsub.publish(NOTIF.SIGN_IN, null);
                        Pubsub.publish('login', null);
                    }).catch(error => {
                        console.log(error);
                        let errorObj = {
                            message: 'Error signing up, please try again'
                        };
                        //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                        Pubsub.publish('auth_error', errorObj);
                    });
                }).catch(error => {
                    console.log(error);
                    let errorObj = {
                        message: 'Error signing up, please try again'
                    };
                    //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                    Pubsub.publish('auth_error', errorObj);
                })
                //)
                ;
            }).catch(error => {
                // @TODO return error codes and display helpful messages to the user, i.e. incorrect password, etc.
                // Potentially make more DRY
                let errorObj = {
                    message: 'Error signing up, please try again'
                };
                //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
                Pubsub.publish('auth_error', errorObj);
            });
        } else {
            let errorObj = {
                message: 'Please fill out all fields'
            };
            //Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
            Pubsub.publish('auth_error', errorObj);
        }
    }

    obj.sendSignoutRequest = () => {
        // @TODO need to verify what direction we're taking with the session token business
        let session_token = localStorage.getItem('x-session-token');
        axios({
            //url: API.signout,
            url: baseURL + 'api/users/login',
            method: 'delete',
            headers: {
                'x-session-token': session_token
            }
        }).then(response => {
            if (response.status === 200) {
                user = {};
                localStorage.setItem('x-session-token', '');
                //Pubsub.publish(NOTIF.SIGN_OUT, null);
                Pubsub.publish('logout', null);
                //Data.handleSignout();
                console.log('signout success');
            } else {
                // @TODO not sure what to do in a .then handler here
                console.log('signout resolved, but not status 200');
            }
        }).catch(error => {
            console.log(error);
            // @TODO send an error back to the user
        });
    }

})(Auth);

const validateSigninRequest = (params) => {
    // API requires either email or alias, and password
    //if ((params.alias || params.email_address) && params.password) {
    //return true;
    //}
    //return false;
    if ((params.username || params.email_address) && params.password) {
        console.log('user is validated');
        //if (params.username && params.password) {
        return true;
    }
    console.log('user is not validated');
    return false;
}

const validateSignupRequest = (params) => {
    if (
        params.first_name &&
        params.last_name &&
        params.username &&
        params.email_address &&
        //params.alias &&
        params.password &&
        params.password_confirm) {
        console.log('signup has the correct parameters');
        return true;
    }
    console.log('signup does not have the correct parameters');
    return false;
}

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