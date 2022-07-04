import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailsRecipe from './components/Details/DetailsRecipe.jsx';
import CreateRecipe from './components/Create/CreateRecipe.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import NavBar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';
import Error404 from './components/Error404/Error404.jsx';

function App() {
  return (
    <React.Fragment>
      <Route path='/home' component={NavBar}/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home/recipe/:id' component={DetailsRecipe} />
        <Route exact path='/home' component={Home} />
        <Route path='/home/update/:id' component={CreateRecipe} />
        <Route path='/home/create' component={CreateRecipe} />
        <Route exact path='*' component={Error404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
