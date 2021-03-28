import React from 'react';
import PropTypes from 'prop-types';

function Result(prop) {
    return (
        <div className="result section">
                    <blockquote className="flow-text">
                    You got {prop.correctAnswers} out of {prop.questionTotal} correct! Check below for your results:<br/>
                    </blockquote>
                    {/* {prop.correctAnswers===prop.questionTotal  ? (
                        <p>Well done you got full marks!</p>
                    ) : (
                        <p>Watch the video and look over the info sheet again then try again!</p>
                    )} */}
                    <div className="row">
                    {_renderObject(prop.questionAndAnswers, prop.wrongAnswers, prop.quizHints)}
                    </div>
        </div>
    );
}

function _renderObject(questionAndAnswers, wrongAnswers, quizHints){
    var questionKeySet = Object.keys(questionAndAnswers);
    return Object.keys(questionAndAnswers).map((obj, i) => {
        return (
            <div>
                {Object.values(wrongAnswers).includes(questionKeySet[i]) ? (
                        <div className="col s7 offset-s2 card-panel red lighten-2 flow-text">
                            {questionKeySet[i]} <br/>
                            &emsp; &emsp; Answer: {questionAndAnswers[obj]} <br/>
                            &emsp; &emsp; Hint: {quizHints[questionKeySet[i]]}
                        </div>
                    ) : (
                        <div className="col s7 offset-s2 card-panel green lighten-2 flow-text">
                            {questionKeySet[i]} <br/>&emsp; &emsp; Answer: {questionAndAnswers[obj]}
                        </div>
                    ) 
                }
            </div>
        )
    })
}

Result.propTypes = {
    questionTotal: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    wrongAnswers: PropTypes.object.isRequired,
    questionAndAnswers: PropTypes.object.isRequired,
    isFinished: PropTypes.number.isRequired
};

export default Result;
