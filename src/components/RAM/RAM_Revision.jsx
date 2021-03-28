import React, { Component } from 'react';

class RAM_Revision extends Component {

  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="row">
          <blockquote  className="col s5 offset-s1 flow-text">
                RAM <br/>
                <blockquote>
                  Random Access Memory - or just memory for short
                </blockquote>
                <blockquote>
                  Shown in Gigabytes (GB)
                </blockquote>
                <blockquote>
                  The more Gigabytes means the computer can do more tasks at the same time
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 flow-text">
                Storage <br/>
                <blockquote>
                Shown in Gigabytes (GB) as well!
                </blockquote>
                <blockquote>
                  Bank of information
                </blockquote>
                <blockquote>
                  Lends RAM bits of information for the CPU's tasks then gets any changes back again
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 offset-s1 flow-text">
                HDD <br/>
                <blockquote>
                  Hard Disk Drive
                </blockquote>
                <blockquote>
                  Most common type of storage in a desktop computer
                </blockquote>
                <blockquote>
                  Needle inside goes round and reads little dots with magnets
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 flow-text">
                SSD<br/>
                <blockquote>
                  Solid State Drive
                </blockquote>
                <blockquote>
                  Most common type of storage in phones
                </blockquote>
                <blockquote>
                  Has no moving parts, work like a slower version of RAM
                </blockquote>
                <blockquote>
                  Costs much more per GB than HDD
                </blockquote>
            </blockquote>
          </div>
          </div>
      </div>
    );
  }

}

export default RAM_Revision;