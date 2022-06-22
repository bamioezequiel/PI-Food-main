import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import DetailsRecipe from './components/Details/DetailsRecipe.jsx';
import './App.css';
import NavBar from './components/Navbar/Navbar.jsx';

function App() {
  return (
      <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route path='/' component={NavBar}/>
        <Route path='/home' component={Home} />
        <Route path='/recipe/:id' component={DetailsRecipe} />
      </React.Fragment>
  );
}

export default App;
