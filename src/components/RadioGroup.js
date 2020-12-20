import React, { useContext, useEffect } from 'react';

import { FiltersContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const RadioGroup = ({ label, name, options, selected = '', newSelected = '' }) => {

  const dispatch = useContext(FiltersContext)[1];
  useEffect(() => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: selected
      }
    })
  }, []);

  const handleChange = event => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: event.target.value
      }
    })
  }

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

export default RadioGroup;
