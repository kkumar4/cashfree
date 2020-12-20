import React, { useState } from 'react';

const TextArea = ({ label, name, value }) => {
  const [input, setInput] = useState(value);

  const handleChange = event => {
    setInput(event.target.value);
  }

  return (
    <div className='textarea-filter'>
      <label>{label}</label>
      <textarea onChange={handleChange} name={name} value={input}></textarea>
    </div>
  )
}

export default TextArea;
