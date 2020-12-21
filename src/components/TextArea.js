import React from 'react';

import { useInput } from '../hooks';

const TextArea = ({ label, name, value, newValue }) => {
  const handleChange = useInput(name, value);

  return (
    <div className='textarea-filter'>
      <label>{label}</label>
      <textarea onChange={handleChange} name={name} value={newValue}></textarea>
    </div>
  )
}

export default React.memo(TextArea);
