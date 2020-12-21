import React from 'react';

import { useInput } from '../hooks';

const TextInput = ({ label, name, value, newValue = '' }) => {
  const handleChange = useInput(name, value);

  return (
    <div className='input-filter'>
      <label>{label}</label>
      <input onChange={handleChange} type="text" name={name} value={newValue} autoComplete="off"></input>
    </div>
  )
}

export default React.memo(TextInput);
