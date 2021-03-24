import React, { Component } from 'react';

class COMP_Video extends Component {

  render() {
    return (
      <div className="App">
            <div className="row section">
                <div className="video-container">
                    <iframe className="col s12" id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_c2jevecr&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[forceMobileHTML5]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_xqa02e0c" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>    
                </div>
            </div>
        </div>
    );
  }

}

export default COMP_Video;