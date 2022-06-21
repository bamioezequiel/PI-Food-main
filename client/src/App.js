import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
      </React.Fragment>
  );
}

export default App;
