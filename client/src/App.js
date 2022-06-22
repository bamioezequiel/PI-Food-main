import React from 'react';
import { Route } from 'react-router-dom';
import DetailsRecipe from './components/Details/DetailsRecipe.jsx';
import CreateRecipe from './components/Create/CreateRecipe.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import NavBar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route path='/' component={NavBar}/>
        <Route path='/home' component={Home} />
        <Route path='/recipe/:id' component={DetailsRecipe} />
        <Route path='/create' component={CreateRecipe} />
      </React.Fragment>
  );
}

export default App;
