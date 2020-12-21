import React, { useContext } from 'react';

import Button from './Button';
import { FiltersDispatchContext } from '../App';
import { FILTER_ACTIONS } from '../hooks';

const FiltersActionButtons = ({ modalCloseHandler }) => {
  const dispatch = useContext(FiltersDispatchContext);

  const clearAllClickHandler = () => {
    dispatch({
      type: FILTER_ACTIONS.CLEAR_ALL
    });
    modalCloseHandler();
  }

  const applyFiltersHandler = () => {
    dispatch({
      type: FILTER_ACTIONS.APPLY_FILTERS
    });
    modalCloseHandler();
  }

  return (
    <div className='filters-action-buttons'>
      <Button clickHandler={clearAllClickHandler} key='clear-all' text='Clear All' isSecondary={true} />
      <Button clickHandler={applyFiltersHandler} key='apply-filters' text='Apply Filters' />
    </div>
  )
}

export default FiltersActionButtons;
