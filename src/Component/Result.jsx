import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Component.css';
import Body from "./Body";

const Result = (props) => {
  const [show, setShow] = useState(true);
  const { score, totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers } = props;

  return (
    <>
      {show ? (
        <div>
          <h2 className="h">Result</h2>
          <div className="result-area">
            <p className="heading2">Your score is {score}</p>
            <div className="content">
              <p className="heading3">Total no. of questions</p>
              <p className="int"><b>{totalQuestions}</b></p>
              <p className="heading3">Number of attempted questions</p>
              <p className="int"><b>{attemptedQuestions}</b></p>
              <p className="heading3">Number of correct answers</p>
              <p className="int"><b>{correctAnswers}</b></p>
              <p className="heading3">Number of wrong answers</p>
              <p className="int"><b>{wrongAnswers}</b></p>
            </div>
            <div className="action-btn">
              <button className="play" onClick={() => setShow(false)}>Play Again</button>
              <Link to="/">
                <button className="play">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      ) :
        (<div>
          <Body />
        </div>)
      }
    </>
  );
};

export default Result;
