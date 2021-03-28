import React, { Component } from 'react';

class RAM_Practical extends Component {

  render() {
    return (
      <div className="App">
            <div className="row section">
                <div className="col s6">
                    <blockquote className="flow-text">
                        Part 1
                    </blockquote>
                    Get eight small pieces of paper, and write on them:
                    <div className="row">
                        <blockquote className="col s2 offset-s1">Bob</blockquote>
                        <blockquote className="col s2">Lucy</blockquote>
                        <blockquote className="col s2">Dylan</blockquote>
                        <blockquote className="col s2">Megan</blockquote>
                    </div>
                    <div className="row">
                        <blockquote className="col s2 offset-s1">Sean</blockquote>
                        <blockquote className="col s2">Rebecca</blockquote>
                        <blockquote className="col s2">Harry</blockquote>
                        <blockquote className="col s2">Alice</blockquote>
                    </div>
                    Place them in groups in even groups on any number of different spread out surfaces. Prepare a bag and a stopwatch, when you start
                    the timer, fetch the names from the bag randomly and say the name aloud once you've picked it out. If the name is not in the bag go to the surface it is and then put it in the bag. <br/>
                    You may only have four names in the bag at any one time, if you need to get a new name, take a bit of paper from the bag out and replace it with 
                    the new bit.
                    <details>
                        <summary>Names</summary>
                        <ul>
                            <li>Bob</li>
                            <li>Dylan</li>
                            <li>Rebecca</li>
                            <li>Sean</li>
                            <li>Dylan</li>
                            <li>Lucy</li>
                            <li>Megan</li>
                            <li>Harry</li>
                            <li>Sean</li>
                            <li>Alice</li>
                        </ul>
                    </details>
                    How did that go? How fast did you get? Do this activity a few times and see how the times compare when you pull different names out randomly. 
                </div>
                <div className="col s6">
                    <blockquote className="flow-text">
                        Part 2
                    </blockquote>
                    Take all the bits of paper and place them on your desk in groups of two. We are going to do the previous part again with this new set up. <br/>
                    See how much faster this is? In the first part, you acted like a Hard Disk Drive going long distances to get the information for the bag (RAM).
                    Where in the second part you acted like a Solid State Drive, getting the information from small piles of piles with very little movement!
                    <blockquote className="flow-text">
                        Further practical ideas: 
                    </blockquote>
                    Try both parts out with different sets of rules!<br/>
                    For example:
                        <ul>
                            <li>&emsp; add more bits of paper</li>
                            <li>&emsp; in Part 1 add more or less different surfaces</li>
                            <li>&emsp; Allow more/less bits of paper in the bag</li>
                        </ul>
                </div>
            </div>
        </div>
    );
  }

}

export default RAM_Practical;