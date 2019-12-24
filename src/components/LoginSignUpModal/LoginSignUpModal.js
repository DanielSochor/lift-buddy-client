import React, { useState, useEffect } from '../../../node_modules/react';
import "./LogInSignUpModal.css"
import Modal from '../../../node_modules/react-modal/lib';
import Auth from '../../utilities/authorizer';
import Pubsub from '../../utilities/pubsub';

import { NOTIF, AUTH_MODAL_TYPES } from '../../utilities/constants';

const changeTypeBtnTextValues = {
    login: 'Don\'t have an account?',
    signup: 'Already have an account?'
};

const customStyles = {
    content: {
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // minWidth: '350px'
    }
};

const loginType = {
    login: 'Log In',
    signup: 'Sign Up'
};

function LogInSignUpModal() {

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
        Pubsub.subscribe(NOTIF.LOG_IN, this, handleLogIn);
        Pubsub.subscribe(NOTIF.LOG_OUT, this, handleLogOut);
        Pubsub.subscribe('auth_error', this, handleErrorInfo);
        Auth.checkForExistingSession();
        return (() => {
            //Pubsub.unsubscribe('modal_toogle', this);
            Pubsub.unsubscribe('login', this);
            Pubsub.unsubscribe('logout', this);
            Pubsub.unsubscribe('auth_error', this);
        });
    }, []);

    useEffect(() => {
        Auth.checkForExistingSession();
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

    const handleLogIn = () => {
        setModalIsOpen(false);
        //Pubsub.publish('login', true);
    }

    const handleLogOut = () => {
        setModalIsOpen(true);
        //TODO add sign up and log in buttons to NAV eventually, now bring back up the modal
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
                <div className='modal-body'>
                    <div className='form-group'>
                        <label>Username</label>
                        <input className='form-control' placeholder='username' value={usernameVal} onChange={handleUsernameChange} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' placeholder='password' value={passwordVal} onChange={handlePasswordChange} />
                    </div>
                </div>
            );
        } else if (modalType === loginType.signup) {
            return (
                //className='form-control' puts input fields below form label
                <div className='modal-body'>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input className='form-control' placeholder='first name' value={firstNameVal} onChange={handleFirstNameChange} />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input className='form-control' placeholder='last name' value={lastNameVal} onChange={handleLastNameChange} />
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input className='form-control' placeholder='username' value={usernameVal} onChange={handleUsernameChange} />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' placeholder='email' value={emailVal} onChange={handleEmailChange} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' placeholder='password' value={passwordVal} onChange={handlePasswordChange} />
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input className='form-control' placeholder='password' value={confirmPasswordVal} onChange={handleConfirmPasswordChange} />
                    </div>
                </div>
            )
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
        contentLabel='LogIn Modal'
        style={customStyles}
        ariaHideApp={false}
    >
        <div className='modal-header'>
            <h5 className='modal-title'>{modalType}</h5>
        </div>
        <div className='error-info'>
            {generateErrorInfo()}
        </div>
        <form>
            {generateFormContents()}
            <button type='button' className='btn btn-link' onClick={toggleModalType}>{changeTypeBtnText}</button>
            <div className='modal-footer'>
                <button type='submit' className='btn btn-primary' onClick={authSubmit}>Submit</button>
            </div>
        </form>
    </Modal>
)

    // return (
    //     <Modal
    //         isOpen={modalIsOpen}
    //         contentLabel='Login Modal'
    //         ariaHideApp={false}
    //     >
    //         <h5 className='modal-title'>{modalType}</h5>
    //         <div className='error-info'>
    //             {generateErrorInfo()}
    //         </div>
    //         <form>
    //             {generateFormContents()}
    //             <div className="row center">
    //                 <button type='button' className='btn btn-link waves-light light-blue darken-3' onClick={toggleModalType}>{changeTypeBtnText}</button>
    //             </div>
    //             <div className='modal-footer row center'>
    //                 <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action" id="signUpBtn" href="/homepage" onClick={authSubmit}>Submit<i className="material-icons right">send</i></button>
    //             </div>
    //             {/* <div className="modal-footer">
    //                 <a className="modal-close waves-effect waves-green btn-flat" onClick={closeModal}>X</a>
    //             </div> */}
    //         </form>
    //     </Modal>
    // )
}

// colors for buttons: https://materializecss.com/color.html

export default LogInSignUpModal;