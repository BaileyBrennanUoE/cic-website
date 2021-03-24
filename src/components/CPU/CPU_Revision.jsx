import React, { Component } from 'react';

class CPU_Revision extends Component {

  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="row">
            <blockquote  className="col s5 offset-s1 flow-text">
                CPU Cores <br/>
                <blockquote>
                  The main number crunching centre
                </blockquote>
                <blockquote>
                  Home to the Cache
                </blockquote>
                <blockquote>
                  More cores, the faster it is but its speed is not additive (e.g. a dual core CPU is not as fast as 2 single core CPUs together)
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 flow-text">
                Clock Speed <br/>
                <blockquote>
                  Tells us how fast the CPU is
                </blockquote>
                <blockquote>
                  Shown in Gigahertz(Hz)
                </blockquote>
                <blockquote>
                  The higher the clock speed, the hotter the CPU gets - too hot and it can destroy files on the computer even!
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 offset-s1 flow-text">
                Cache <br/>
                <blockquote>
                  Small, super fast storage for the CPU
                </blockquote>
                <blockquote>
                  Like RAM but much smaller - very expensive as well
                </blockquote>
                <blockquote>
                  The CPU uses cache like its memory, most common tasks are kept there
                </blockquote>
            </blockquote>
            <blockquote  className="col s5 flow-text">
                Types of CPU <br/>
                <blockquote>
                  CISC - found in desktop computers, larger and power hungry like super cars
                </blockquote>
                <blockquote>
                  RISC - found in smartphones/tablets, smaller and less power greedy like a tiny electric car
                </blockquote>
            </blockquote>
          </div>
          </div>
      </div>
    );
  }

}

export default CPU_Revision;