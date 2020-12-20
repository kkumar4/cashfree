import React, { useContext, useEffect, useState } from 'react';

import { FiltersContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const Dropdown = ({ label, name, options, selected = '', newSelected = '' }) => {

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

  if (!newSelected) {
    options = [
      {
        id: 'select',
        value: 'Select'
      },
      ...options
    ]
  }

  const handleSelect = event => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: event.target.value
      }
    })
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

export default Dropdown;
