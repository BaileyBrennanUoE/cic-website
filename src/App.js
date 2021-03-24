import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './components/Home';
import CPU from './components/CPU';
import Computer from './components/Computer';
import Ram from './components/Ram';

import M from 'materialize-css';

class App extends Component {
  componentDidMount(){
    let dropdowns = document.querySelectorAll(".dropdown-trigger");
    let options = {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false
    };
    M.Dropdown.init(dropdowns, options);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="hide-on-med-and-down">
                <li>
                  <NavLink 
                    exact to="/" 
                    activeClassName="selected">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/Computer" 
                    activeClassName="selected">
                    What's in a Computer
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/CPU" 
                    activeClassName="selected">
                    CPU
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/Ram" 
                    activeClassName="selected">
                    RAM vs Storage
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>        
          <Switch>
            <Route path="/Computer">
              <Computer />
            </Route>
            <Route path="/CPU">
              <CPU />
            </Route>
            <Route path="/Ram">
              <Ram />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;