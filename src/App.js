import React from 'react';
import logo from './logo.svg';
import BeerHome from './components/BeerHome';
import BeerList from './components/BeerList'
import { Switch, Route } from 'react-router-dom';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route path='/new-beer' component={AddBeer} />
      <Route path='/random-beer' component={RandomBeer} />
      <Route path='/beers/:beerId' component={SingleBeer} />
        <Route path="/beers" component={BeerList} />
        <Route path="/" component={BeerHome} />
       
        
        
    
      </Switch>
      
    </div>
  );
}

export default App;
