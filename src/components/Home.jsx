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
                                        Welcome to Rex Support!<br/>
                                        <blockquote>
                                            Here you will learn about loads of different topics about computers! <br/>
                                            From CPUs to RAM, there are many small parts that play a role in getting screen to show what you want when you want it.
                                            Here, to the right and below, is a breakdown of the current main topics.
                                        </blockquote>
                                </blockquote>
                                    <blockquote  className="col s5 flow-text">
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
                                    <blockquote  className="col s5 offset-s1 flow-text">
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
                                        RAM
                                        </blockquote>
                                        <blockquote>
                                        Storage
                                        </blockquote>
                                        <blockquote>
                                        HDD
                                        </blockquote>
                                        <blockquote>
                                        SSD
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