import React, { useState, useEffect } from 'react';
//import './main.css';
//-import Run from "../../pages/Run/Run";
import Pubsub from '../../utilities/pubsub';
import LogInSignUpModal from '../LogInSignUpModal/LogInSignUpModal';
import NavBar from '../NavBar/NavBar';
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

function Main() {

  const [authenticated, setAuthenticated] = useState(false);
  //-const [challengeType, setChallengeType] = useState('');

  useEffect(() => {
    Pubsub.subscribe('login', this, handleSignin);
    Pubsub.subscribe('logout', this, handleSignout);
    //-Pubsub.subscribe('challengeType', this, handleChallengeType);
    return (() => {
      Pubsub.unsubscribe('login', this);
      Pubsub.unsubscribe('logout', this);
      //-Pubsub.unsubscribe('challengeType', this);
    });
  }, []);

  const handleSignout = () => {
    setAuthenticated(false);
  }

  const handleSignin = () => {
    setAuthenticated(true);
  }

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

  return (

    <div>
      {/* <Router>
        <div>
          <Route exact path="/challengepage" component={ChallengePage} />
          <Route exact path="/homepage" component={HomePage}/>
        </div>
      </Router> */}
      <NavBar />
      <LogInSignUpModal />
      {/* <FAB /> */}
      {/* {pageDirector()} */}
    </div>
  );
}

export default Main;