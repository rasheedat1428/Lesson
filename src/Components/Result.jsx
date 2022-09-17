import React from 'react';
import Grade from "./Grade";

const Result = (props) => {
    const calc = (b) => {
    if (b >= 70) return "A";
    return "D";
    };
  return (
    <div>
        <p>Name:{props.name}</p>
        <Grade calcStatus = {calc} score={props.score}/>
    </div>
  );
};

export default Result;