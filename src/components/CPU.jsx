import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import CPU_Quiz from '../components/CPU_Quiz';
import M from 'materialize-css';

class CPU extends Component {
    render() {
        return (
            <div className="CPU container">
                <div className="row">
                <iframe className="col s12" id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_f91l1g3r&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_u40zg6b4" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>
                
                <Router>
                    <nav>
                    <ul>
                        <li>
                        <NavLink 
                            to="/CPU_Quiz" 
                            activeClassName="selected">
                            Quiz
                        </NavLink>
                        </li>
                    </ul>
                    </nav>        <Switch>
                    <Route path="/CPU_Quiz">
                        <CPU_Quiz />
                    </Route>
                    </Switch>
                </Router>
                </div>
            </div>
        )
    }
}

export default CPU;