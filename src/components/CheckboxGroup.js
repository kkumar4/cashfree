import React, { useState } from 'react';

const CheckboxGroup = ({ name, label, options, selected = [] }) => {
  const [checkedValues, setCheckedValues] = useState(selected);

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => {
          const { id, value } = option;
          const handleChange = event => {
            const checked = event.target.checked;
            if (checked) {
              setCheckedValues([...checkedValues, id]);
            } else {
              setCheckedValues(checkedValues.filter(checkedItem => checkedItem !== id));
            }
          }

          return (
            <div key={id} className='checkbox'>
              <input id={id} onChange={handleChange} checked={checkedValues.includes(id)} type='checkbox' value={value} />
              <label htmlFor={id}>{value}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CheckboxGroup;
