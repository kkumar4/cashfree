import React, { useContext, useEffect } from 'react';

import { FiltersDispatchContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const Checkbox = ({ id, name, value, newSelected }) => {
  const dispatch = useContext(FiltersDispatchContext);
  const handleChange = event => {
    const checked = event.target.checked;
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: checked ? [...newSelected, id] : newSelected.filter(checkedItem => checkedItem !== id)
      }
    })
  }

  return (
    <div key={id} className='checkbox'>
      <input id={id} onChange={handleChange} checked={newSelected.includes(id)} type='checkbox' value={value} />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

const CheckboxGroup = ({ name, label, options, selected = [], newSelected = [] }) => {
  const dispatch = useContext(FiltersDispatchContext);

  useEffect(() => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: selected
      }
    })
  }, []);

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => <Checkbox key={option.id} {...option} name={name} newSelected={newSelected} />)}
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return (prevProps.newSelected ? prevProps.newSelected.length : 0) === nextProps.newSelected.length
}

export default React.memo(CheckboxGroup, areEqual);
