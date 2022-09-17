import React from 'react'

const Grade = ({score, calcStatus}) => {
  return (
    <div>
        <p>Score: {score}</p>
        <p>Status: {calcStatus(score)}</p>
    </div>
  );
};

export default Grade;