import React from 'react';
import './Main.css';
import LogInSignUpModal from '../LogIn_SignUp_Modal/LogInSignUpModal';

//import React, { useState, useEffect } from 'react';
//-import Run from "../../pages/Run/Run";
//import Pubsub from '../../utilities/pubsub';
//import Challenge from '../Challenge/Challenge';
//import Auth from '../../utilities/authorizer';
//import HomePage from "../../pages/HomePage/HomePage";
//-import Bike from '../../pages/Bike/Bike';
//-import Abstain from '../../pages/Abstaining/Abstaining';
//-import Water from '../../pages/Water/Water';
//-import ChallengePage from '../ChallengePage/ChallengePage';
//import ChallengeContainer from '../ChallengeContainer/ChallengeContainer';
//-import FAB from '../FloatingButton/Fab';
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import { NOTIF } from '../../utilities/constants';

function Main() {

  //const [authenticated, setAuthenticated] = useState(false);
  //const [challengeType, setChallengeType] = useState('');

  // useEffect(() => {
  //   Pubsub.subscribe('login', this, handleSignin);
  //   Pubsub.subscribe('logout', this, handleSignout);
  //   Pubsub.subscribe('challengeType', this, handleChallengeType);
  //   return (() => {
  //     Pubsub.unsubscribe('login', this);
  //     Pubsub.unsubscribe('logout', this);
  //     Pubsub.unsubscribe('challengeType', this);
  //   });
  // }, []);

  // const handleSignout = () => {
  //   setAuthenticated(false);
  // }

  // const handleSignin = () => {
  //   setAuthenticated(true);
  // }

  //-const handleChallengeType = (challengeType) => {
  //-  setChallengeType(challengeType);
  //-  console.log('challenge type is: ' + challengeType);
  //-}

  // const pageDirector = () => {
  //   if (authenticated) {
  //     switch (challengeType) {
  //       case ('run'):
  //         return <Run />;
  //       case ('bike'):
  //         return <Bike />;
  //       case ('water'):
  //         return <Water />;
  //       case ('abstain'):
  //         return <Abstain />;
  //       default:
  //         return <ChallengePage />
  //     }
  //   }
  // }

//<div className='bg' style={{ backgroundImage:`url(${image})` }}>

  return (
    <div className='container'>
      {/* <Router>
        <div>
          <Route exact path="/challengepage" component={ChallengePage} />
          <Route exact path="/homepage" component={HomePage}/>
        </div>
      </Router> */}
      <LogInSignUpModal />
      {/* <FAB /> */}
      {/* {pageDirector()} */}
    </div>
  );
}

export default Main;