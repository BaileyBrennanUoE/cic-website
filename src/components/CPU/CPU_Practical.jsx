import React, { Component } from 'react';

class CPU_Practical extends Component {

  render() {
    return (
      <div className="App">
            <div className="row section">
                <div className="col s6">
                    <blockquote className="flow-text">
                        Part 1
                    </blockquote>
                    Get four pieces of paper and on each, write down the following information on these family members:<br/>
                    <div className="row">
                        <div className="col s5 offset-s1">
                        Bob
                        <ul>
                            <li>Bob is Lucy's dad</li>
                            <li>Bob is Dylan's brother</li>
                            <li>Bob is married to Megan</li>
                            <li>Bob is 40</li>
                        </ul>
                        </div>
                        <div className="col s5">
                        Lucy
                        <ul>
                            <li>Lucy is Dylan's niece</li>
                            <li>Lucy is Megan's daughter</li>
                            <li>Lucy is half of Bob's age</li>
                            <li>Lucy likes dancing</li>
                        </ul>
                        </div>
                        <div className="col s5 offset-s1">
                        Dylan
                        <ul>
                            <li>Dylan has one brother</li>
                            <li>Dylan is a doctor</li>
                            <li>Dylan likes cycling</li>
                            <li>Dylan is a twin</li>
                        </ul>
                        </div>
                        <div className="col s5">
                        Megan
                        <ul>
                            <li>Megan is the smallest in her family</li>
                            <li>Megan taught her daughter to dance</li>
                            <li>Megan gave her husband's twin a bike</li>
                        </ul>
                        </div>
                    </div>
                    Try and memorise the cards. Get a stopwatch ready, now put the pieces of paper in a bag and try and answer the questions below, 
                    each time pulling out a bit of paper that can answer the question and returning them before the next question(this can be more than one bit of paper!).<br/>
                    When ready click below to reveal the questions:
                    <details>
                        <summary>Questions</summary>
                        <ul>
                            <li>How old is Lucy?</li>
                            <li>Who got Bob's daughter into her hobby?</li>
                            <li>Who bought Bob's twin a bike?</li>
                            <li>Who could have helped Bob when he hurt himself at his birthday party?</li>
                        </ul>
                    </details> 
                    Stop the timer! How fast did you complete that? Bet that could've been easier to do if you had a common card out right?
                </div>
                <div className="col s6">
                    <blockquote className="flow-text">
                        Part 2
                    </blockquote>
                    Keep Bob's card out on your desk and reset the timer. Answer these new sets of questions, using the same rules as before (putting back each card that is not Bob's after each question).
                    See how much quicker you can do this now that you have a list of commonly used facts right beside you!
                    <details>
                        <summary>Questions</summary>
                        <ul>
                            <li>How old is Lucy?</li>
                            <li>Who got Bob's daughter into her hobby?</li>
                            <li>Who bought Bob's twin a bike?</li>
                            <li>Who could have helped Bob when he hurt himself at his birthday party?</li>
                        </ul>
                    </details> 
                </div>
            </div>
        </div>
    );
  }

}

export default CPU_Practical;