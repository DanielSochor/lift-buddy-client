import React, { useState, useEffect } from '../../../node_modules/react';
import "./LoginSignUpModal.css"
import Modal from '../../../node_modules/react-modal';
import Auth from '../../utilities/authorizer';
import Pubsub from '../../utilities/pubsub';

const changeTypeBtnTextValues = {
    login: 'Don\'t have an account?',
    signup: 'Already have an account?'
};

const loginType = {
    login: 'Log In',
    signup: 'Sign Up'
};

function LoginSignUpModal() {

    const [modalType, setModalType] = useState(loginType.login);
    const [changeTypeBtnText, setChangeTypeBtnText] = useState(changeTypeBtnTextValues.login);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const [firstNameVal, setFirstNameVal] = useState('');
    const [lastNameVal, setLastNameVal] = useState('');
    const [usernameVal, setUsernameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [confirmPasswordVal, setConfirmPasswordVal] = useState('');

    useEffect(() => {
        //Pubsub.subscribe('modal_toogle', this, handleModalToggle);
        Pubsub.subscribe('login', this, handleLogin);
        Pubsub.subscribe('logout', this, handleSignout);
        Pubsub.subscribe('auth_error', this, handleErrorInfo);
        Auth.checkForExistingSession();
        return (() => {
            //Pubsub.unsubscribe('modal_toogle', this);
            Pubsub.unsubscribe('login', this);
            Pubsub.unsubscribe('logout', this);
            Pubsub.unsubscribe('auth_error', this);
        });
    }, []);

    // const handleModalToggle = (type) => {
    //     if (type === loginType.login) {
    //       setModalType(loginType.login);
    //       setChangeTypeBtnText(changeTypeBtnTextValues.login);
    //     } else if (type === loginType.signup) {
    //       setModalType(loginType.signup);
    //       setChangeTypeBtnText(changeTypeBtnTextValues.signup);
    //     }
    //     setErrorMessage('');
    //     setModalIsOpen(false);
    //   }


    const toggleModalType = () => {
        //setErrorMessage('');
        let newModalType = modalType === loginType.login ? loginType.signup : loginType.login;
        let newChangeBtnText = modalType === loginType.login ? changeTypeBtnTextValues.signup : changeTypeBtnTextValues.login;
        setModalType(newModalType);
        setChangeTypeBtnText(newChangeBtnText);
    }

    const handleLogin = () => {
        setModalIsOpen(false);
        //Pubsub.publish('login', true);
    }

    const handleSignout = () => {
        setModalIsOpen(true);
        //Pubsub.publish('login', false);
    }

    // const openModal = () => {
    //     setModalIsOpen(true);
    // }
    // const closeModal = () => {
    //     setModalIsOpen(false);
    // }

    const handleFirstNameChange = (event) => {
        setFirstNameVal(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastNameVal(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsernameVal(event.target.value);
    }
    const handleEmailChange = (event) => {
        // @TODO implement live validation
        setEmailVal(event.target.value);
    }
    const handlePasswordChange = (event) => {
        // @TODO implement live validation
        setPasswordVal(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPasswordVal(event.target.value);
    }
    const handleErrorInfo = (errorObj) => {
        setErrorMessage(errorObj.message);
    }

    const authSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        if (modalType === loginType.login) {
            let signinObj = {
                username: usernameVal,
                password: passwordVal
            };
            console.log('sign in obj: ');
            console.log(signinObj);
            Auth.sendLogInRequest(signinObj);
        } else if (modalType === loginType.signup) {
            let signupObj = {
                first_name: firstNameVal,
                last_name: lastNameVal,
                email_address: emailVal,
                username: usernameVal,
                password: passwordVal,
                password_confirm: confirmPasswordVal
            };
            console.log('sign up obj: ');
            console.log(signupObj);
            Auth.sendSignUpRequest(signupObj);
        }
    }

    const generateFormContents = () => {
        if (modalType === loginType.login) {
            return (
                <div className='modal-content'>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginUsername" type="text" className="validate" value={usernameVal} onChange={handleUsernameChange} />
                            <label htmlFor="loginUsername">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginPassword" type="password" className="validate" value={passwordVal} onChange={handlePasswordChange} />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                    </div>
                </div>
            );
        } else if (modalType === loginType.signup) {
            return (
                <div className='modal-content'>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpFirstName" type="text" className="validate" value={firstNameVal} onChange={handleFirstNameChange} />
                            <label htmlFor="signUpFirstName">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpLastName" type="text" className="validate" value={lastNameVal} onChange={handleLastNameChange} />
                            <label htmlFor="signUpLastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpUsername" type="text" className="validate" value={usernameVal} onChange={handleUsernameChange} />
                            <label htmlFor="signUpUsername">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpEmail" type="email" className="validate" value={emailVal} onChange={handleEmailChange} />
                            <label htmlFor="signUpEmail">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpPassword" type="password" className="validate" value={passwordVal} onChange={handlePasswordChange} />
                            <label htmlFor="signUpPassword">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="confirmPassword" type="password" className="validate" value={confirmPasswordVal} onChange={handleConfirmPasswordChange} />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log('error in authModal type: ' + modalType);
        }
    }

    const generateErrorInfo = () => {
        return (
            <span className='text-danger'>{errorMessage}</span>
        );
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            contentLabel='Login Modal'
            ariaHideApp={false}
        >
            <h5 className='modal-title'>{modalType}</h5>
            <div className='error-info'>
                {generateErrorInfo()}
            </div>
            <form>
                {generateFormContents()}
                <div className="row center">
                    <button type='button' className='btn btn-link waves-light light-blue darken-3' onClick={toggleModalType}>{changeTypeBtnText}</button>
                </div>
                <div className='modal-footer row center'>
                    <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action" id="signUpBtn" href="/homepage" onClick={authSubmit}>Submit<i className="material-icons right">send</i></button>
                </div>
                {/* <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat" onClick={closeModal}>X</a>
                </div> */}
            </form>
        </Modal>
    )
}

// colors for buttons: https://materializecss.com/color.html

export default LoginSignUpModal;