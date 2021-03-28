import React, { Component } from 'react';

class COMP_Revision extends Component {

  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="row">
            <blockquote  className="col s4 flow-text">
                CPU <br/>
                <blockquote>
                  The brain of the computer
                </blockquote>
                <blockquote>
                  Can come in many shapes and sizes
                </blockquote>
                <blockquote>
                  Can get too hot, so needs a fan
                </blockquote>
            </blockquote>
            <blockquote  className="col s4 flow-text">
                RAM <br/>
                <blockquote>
                  Used like a notebook by the CPU
                </blockquote>
                <blockquote>
                  Keeps information of recent tasks
                </blockquote>
                <blockquote>
                  Is not kept forever, it is deleted once the task is over
                </blockquote>
            </blockquote>
            <blockquote  className="col s4 flow-text">
                Storage <br/>
                <blockquote>
                  Stores computer files, like your homework
                </blockquote>
                <blockquote>
                  Is kept until deleted by computer owner
                </blockquote>
                <blockquote>
                  Can be fast or slow, depending on the computer's needs
                </blockquote>
            </blockquote>
            <blockquote  className="col s4 flow-text">
                GPU <br/>
                <blockquote>
                  Helps the CPU do sums or show games on your screen when there is too much work for it alone
                </blockquote>
            </blockquote>
            <blockquote  className="col s4 flow-text">
                Motherboard <br/>
                <blockquote>
                  Where the CPU, RAM and GPU are placed so they can talk to each other
                </blockquote>
                <blockquote>
                  Spreads the power to each part in the computer
                </blockquote>
            </blockquote>
            <blockquote  className="col s4 flow-text">
                Power Supply <br/>
                <blockquote>
                  Takes the power from your wall and gives it to the Motherboard
                </blockquote>
                <blockquote>
                  Is required to make the computer run
                </blockquote>
            </blockquote>
          </div>
          </div>
      </div>
    );
  }

}

export default COMP_Revision;