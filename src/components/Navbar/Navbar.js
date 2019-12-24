import React from 'react';
//import './NavBar.css';

// Component imports
import NavbarLogo from '../NavBarLogo/NavBarLogo';
//import NavbarAuthDropdown from '../navbarAuthDropdown/navbarAuthDropdown';
//import AuthModal from '../authModal/authModal';

//TODO: if session token doesn't exist show LogInSignUpModal
//TOFO: if session token does exisit show log out button

const authSubmit = (event) => {
  //event.preventDefault();
}

function NavBar() {

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <NavbarLogo />
      <div className='nav-wrapper'>

              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

        {/* <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action" id="signUpBtn" href="/homepage" onClick={authSubmit}>Submit<i className="material-icons right">send</i></button> */}

      </div>
    </nav>
  );
}

export default NavBar;