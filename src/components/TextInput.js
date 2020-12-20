import React, { useContext, useEffect } from 'react';

import { FiltersContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const TextInput = ({ label, name, value, newValue = '' }) => {
  const dispatch = useContext(FiltersContext)[1];
  useEffect(() => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: value
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
    <div className='input-filter'>
      <label>{label}</label>
      <input onChange={handleChange} type="text" name={name} value={newValue} autoComplete="off"></input>
    </div>
  )
}

export default TextInput;
