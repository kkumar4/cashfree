import React, { useContext, useEffect } from 'react';

import { FiltersContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const CheckboxGroup = ({ name, label, options, selected = [], newSelected = [] }) => {

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

  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map(option => {
          const { id, value } = option;
          const handleChange = event => {
            const checked = event.target.checked;
            if (checked) {
              dispatch({
                type: FILTER_ACTIONS.SET_NEW_VALUE,
                payload: {
                  name,
                  newValue: [...newSelected, id]
                }
              })
            } else {
              dispatch({
                type: FILTER_ACTIONS.SET_NEW_VALUE,
                payload: {
                  name,
                  newValue: newSelected.filter(checkedItem => checkedItem !== id)
                }
              })
            }
          }

          return (
            <div key={id} className='checkbox'>
              <input id={id} onChange={handleChange} checked={newSelected.includes(id)} type='checkbox' value={value} />
              <label htmlFor={id}>{value}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CheckboxGroup;
