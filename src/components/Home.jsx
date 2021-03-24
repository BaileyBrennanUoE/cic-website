import React, { Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="Home container flex">
                        <nav className="green darken-3">
                            <div className="nav-wrapper">
                                <a className="brand-logo center">Home</a>
                            </div>
                        </nav>
                        <div className="App">
                            <div className="section">
                                <div className="row">
                                    <blockquote  className="col s5 offset-s1 flow-text">
                                        What's in a Computer?<br/>
                                        <blockquote>
                                            CPU
                                        </blockquote>
                                        <blockquote>
                                            Storage
                                        </blockquote>
                                        <blockquote>
                                            GPU
                                        </blockquote>
                                        <blockquote>
                                            Motherboard
                                        </blockquote>
                                        <blockquote>
                                            Power Supply
                                        </blockquote>
                                    </blockquote>
                                    <blockquote  className="col s5 flow-text">
                                        CPU <br/>
                                        <blockquote>
                                        Cores
                                        </blockquote>
                                        <blockquote>
                                        Clock Speed
                                        </blockquote>
                                        <blockquote>
                                        Cache
                                        </blockquote>
                                        <blockquote>
                                        Types of CPU
                                        </blockquote>
                                    </blockquote>
                                    <blockquote  className="col s5 flow-text">
                                        RAM vs Storage <br/>
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
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Home;