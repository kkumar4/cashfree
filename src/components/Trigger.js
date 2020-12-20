import React, { useEffect, useState, useContext } from 'react';

import FiltersModal from './FiltersModal';
import Button from './Button';
import { FILTER_TYPES } from '../Constants';
import { FiltersContext } from '../App';

const Trigger = () => {
  const [filters] = useContext(FiltersContext);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);

  useEffect(() => {
    const appliedFiltersCount = filters.reduce((appliedFiltersCount, filter) => {
      if ([FILTER_TYPES.TEXT_INPUT, FILTER_TYPES.TEXT_AREA].includes(filter.type)) {
        if (filter.value.trim()) {
          appliedFiltersCount++;
        }
      } else if (filter.type === FILTER_TYPES.CHECKBOX_GROUP) {
        if (filter.selected.length > 0) {
          appliedFiltersCount++;
        }
      } else if ([FILTER_TYPES.RADIO_GROUP, FILTER_TYPES.SELECT].includes(filter.type)) {
        if (filter.selected) {
          appliedFiltersCount++;
        }
      }
      return appliedFiltersCount;
    }, 0);
    setAppliedFiltersCount(appliedFiltersCount);
  }, [filters]);

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const toggleFiltersModal = () => {
    setIsFiltersModalOpen(!isFiltersModalOpen);
  }

  return (
    <div className='trigger'>
      <Button clickHandler={toggleFiltersModal} text={`Filters(${appliedFiltersCount})`} />
      {isFiltersModalOpen && <FiltersModal modalCloseHandler={toggleFiltersModal} />}
    </div>
  )
}

export default Trigger;
