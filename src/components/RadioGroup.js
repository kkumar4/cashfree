import React, { useState } from 'react';

const RadioGroup = ({ label, name, options, selected = '' }) => {

  const [selectedValue, setSelectedValue] = useState(selected);

  const handleChange = event => {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => {
          return (
            <div className='radio' key={option.id}>
              <input onChange={handleChange} id={option.id} checked={option.id === selectedValue} type='radio' name={name} value={option.id} />
              <label htmlFor={option.id}>{option.value}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RadioGroup;
