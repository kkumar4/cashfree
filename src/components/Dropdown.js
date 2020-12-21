import React from 'react';

import { useInput } from '../hooks';

const Dropdown = ({ label, name, options, selected = '', newSelected = '' }) => {
  const handleSelect = useInput(name, selected);

  if (!newSelected) {
    options = [
      {
        id: 'select',
        value: 'Select'
      },
      ...options
    ]
  }

  return (
    <div className='select-filter'>
      <label>{label}</label>
      <select onChange={handleSelect} name={name} value={newSelected}>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>{option.value}</option>
          )
        })}
      </select>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.newSelected === nextProps.newSelected;
}

export default React.memo(Dropdown, areEqual);
