import React from 'react';
import './NavBarLogo.css';

import { APP_NAME, NOTIF } from '../../utilities/constants';
import Pubsub from '../../utilities/pubsub';

function NavbarLogo() {
  const logoClicked = () => {
    console.log('logo clicked');
    if (window.innerWidth <= 575) {
      console.log('Mobile');
      //Pubsub.publish(NOTIF.TOGGLE_SIDEBAR_MOBILE, null);
    }
  }

  return (
    <button className='navbar-brand' onClick={logoClicked}>{APP_NAME}</button>
  );
}

export default NavbarLogo;