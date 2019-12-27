import React from 'react';
//import './NavBar.css';

// Component imports
import NavbarLogo from '../NavBarLogo/NavBarLogo';
import Authorizer from '../../utilities/authorizer';
//import NavbarAuthDropdown from '../navbarAuthDropdown/navbarAuthDropdown';
//import AuthModal from '../authModal/authModal';

function NavBar() {

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <NavbarLogo />
      <div className='navbar-nav ml-auto'>
        <button type='button' className='btn btn-danger' onClick={() => Authorizer.sendLogOutRequest()}>Sign Out</button>
      </div>
   </nav>
  );
}

export default NavBar;