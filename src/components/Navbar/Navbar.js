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
    </nav>
  );
}

export default NavBar;