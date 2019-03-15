import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';
import Innovation from './pages/Innovation';
import InnovationChildren from './pages/InnovationChildren';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/innovation" component={ Innovation } />
            <Route path="/innovationChildren/:name" component={ InnovationChildren } />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;