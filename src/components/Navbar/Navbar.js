import React from 'react';
//import './NavBar.css';

// Component imports
//import NavbarBrand from '../navbarBrand/navbarBrand';
//import NavbarAuthDropdown from '../navbarAuthDropdown/navbarAuthDropdown';
//import AuthModal from '../authModal/authModal';

//TODO: if session token doesn't exist show LogInSignUpModal
//TOFO: if session token does exisit show log out button

const authSubmit = (event) => {
  //event.preventDefault();
}

function NavBar() {

  return (
    <div>
      <nav>
        {/* <NavbarBrand /> */}
        <div className='nav-wrapper'>
          
        {/* <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action" id="signUpBtn" href="/homepage" onClick={authSubmit}>Submit<i className="material-icons right">send</i></button> */}

        </div>
      </nav>
    </div>
  );
}

export default NavBar;