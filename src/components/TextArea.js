import React, { useContext, useEffect } from 'react';

import { FiltersContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const TextArea = ({ label, name, value, newValue }) => {
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
    <div className='textarea-filter'>
      <label>{label}</label>
      <textarea onChange={handleChange} name={name} value={newValue}></textarea>
    </div>
  )
}

export default TextArea;
