import React from 'react';
import './Button.css';


function Button({buttonValue, isSpan, buttonType, onButtonClick, onKeyPressed}) {

  return (
    <button onClick={onButtonClick(buttonValue)} className={`button ${isSpan ? 'button--span' : null} ${buttonType || ""} `}>{buttonValue}</button>
  )
}

export default Button