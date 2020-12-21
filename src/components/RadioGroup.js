import React from 'react';

import { useInput } from '../hooks';

const RadioGroup = ({ label, name, options, selected = '', newSelected = '' }) => {
  const handleChange = useInput(name, selected);

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => {
          return (
            <div className='radio' key={option.id}>
              <input onChange={handleChange} id={option.id} checked={option.id === newSelected} type='radio' name={name} value={option.id} />
              <label htmlFor={option.id}>{option.value}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.newSelected === nextProps.newSelected;
}

export default React.memo(RadioGroup, areEqual);
