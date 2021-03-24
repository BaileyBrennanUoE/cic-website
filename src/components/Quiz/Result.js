import React from 'react';
import PropTypes from 'prop-types';

function Result(prop) {
    return (
        <div className="result section">
                <blockquote className="flow-text">
                    You got {prop.correctAnswers} out of {prop.questionTotal} correct <br/>
                    {prop.correctAnswers===prop.questionTotal  ? (
                        <p>Well done you got full marks!</p>
                    ) : (
                        <div>
                            <p>Watch the video and look over the info sheet again then try again!</p>
                            <br/>Questions you got incorrect:
                            {_renderObject(prop.wrongAnswers)}
                        </div>
                    )}
                </blockquote>
        </div>
    );
}

function _renderObject(object){
    return Object.keys(object).map((obj, i) => {
        return (
            <blockquote>
                &emsp;{object[obj]}
            </blockquote>
        )
    })
}

Result.propTypes = {
    questionTotal: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    wrongAnswers: PropTypes.object.isRequired,
    isFinished: PropTypes.number.isRequired
};

export default Result;
