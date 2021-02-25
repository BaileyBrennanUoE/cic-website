import React from 'react';
import PropTypes from 'prop-types';
import QuestionCount from '../components/QuestionCount';

function Result(prop) {
    return (
        <div className="result">
            You got {prop.correctAnswers} out of {prop.questionTotal} correct
        </div>
    );
}

Result.propTypes = {
    questionTotal: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    isFinished: PropTypes.number.isRequired
};

export default Result;
