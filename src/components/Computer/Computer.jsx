import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import COMP_Quiz from '../Computer/COMP_Quiz';
import COMP_Video from '../Computer/COMP_Video';
import COMP_Revision from '../Computer/COMP_Revision';
import COMP_Practical from '../Computer/COMP_Practical';

class Computer extends Component {
    render() {
        return (
            <div className="COMP container flex">
                <Router>
                        <nav className="green darken-3">
                            <div className="nav-wrapper">
                                <a className="brand-logo center">What's in a Computer?</a>
                                <ul>
                                    <li>
                                        <NavLink 
                                            to="/COMP_Video" 
                                            activeClassName="selected">
                                            Video
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/COMP_Revision"
                                            activeClassName="selected">
                                            Info Sheet    
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/COMP_Quiz" 
                                            activeClassName="selected">
                                            Quiz
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/COMP_Practical" 
                                            activeClassName="selected">
                                            Practical
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>        
                        <Switch>
                            <Route path="/COMP_Video">
                                <COMP_Video />
                            </Route>
                            <Route path="/COMP_Revision">
                                <COMP_Revision />
                            </Route>
                            <Route path="/COMP_Quiz">
                                <COMP_Quiz />
                            </Route>
                            <Route path="/COMP_Practical">
                                <COMP_Practical />
                            </Route>
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default Computer;