import React, { useContext } from 'react';

import FilterComponent from './FilterComponent';
import { FiltersContext } from '../App';

const Filters = () => {
  const filters = useContext(FiltersContext);
  return (
    <div className='filters'>
      {filters.map((filter, index) => <FilterComponent key={index} filter={filter} />)}
    </div>
  )
}

export default Filters;
