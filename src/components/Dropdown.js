import React, { useState } from 'react';

const Dropdown = ({ label, name, options, selected = '' }) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  if (!selectedValue) {
    options = [
      {
        id: 'select',
        value: 'Select'
      },
      ...options
    ]
  }

  const handleSelect = event => {
    setSelectedValue(event.target.value);
  }

  return (
    <div className='select-filter'>
      <label>{label}</label>
      <select onChange={handleSelect} name={name} value={selectedValue}>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>{option.value}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown;
