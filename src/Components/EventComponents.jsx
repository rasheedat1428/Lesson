import React from 'react'

const EventComponents = () => { 
  return (
    <>
        <button onClick={() => alert("Hello World")}>Click</button>
    </>
  )
}
export const EventComponent1 = (props) => {
    if (props.name) {
    return <p>Correct: {props.name}</p>
    };
    return <p>Failed</p>
}
export const EventComponent2 = (props) => {
    return props.name ? (
      <p> Good: {props.name}</p>
    ): (
  <p>Not Good</p>
); 
};
export const EventComponent3 = () => {
  const y = 1;
  return y > 0 && <p>Perfect: </p>
};
export const EventComponent4 = ({a}) => a > 0 && <p>Passed:{a}</p>
export const EventComponent5 = ({arr}) => {
  const comb = arr.map((b)=> (3 * b));
  return arr && comb.map((c, i) => (<p key={i}>{c}</p>))
};
export default EventComponents