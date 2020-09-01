import React from 'react';

const Controls = (props) => (
  <div className='controls'>
    {props.playing ?
      <button onClick={props.stop}>Stop</button> :
      <button onClick={props.play}>Start</button>
    }
  </div>
);

export default Controls;