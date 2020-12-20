import React, { useState } from 'react';

const TextInput = ({ label, name, value }) => {

  const [input, setInput] = useState(value);

  const handleChange = event => {
    setInput(event.target.value);
  }

  return (
    <div className='input-filter'>
      <label>{label}</label>
      <input onChange={handleChange} type="text" name={name} value={input} autoComplete="off"></input>
    </div>
  )
}

export default TextInput;
