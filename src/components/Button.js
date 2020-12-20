import React from 'react';

const Button = ({ text, clickHandler, isSecondary = false }) => {
  return (
    <button className={`button ${isSecondary ? 'button--secondary' : ''}`} onClick={clickHandler}>{text}</button>
  )
}

export default Button;
