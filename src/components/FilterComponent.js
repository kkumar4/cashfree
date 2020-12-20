import React from 'react';

import { FILTER_TYPES } from '../Constants';
import TextInput from './TextInput';
import TextArea from './TextArea';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Dropdown from './Dropdown';

const FilterComponent = ({ filter }) => {
  switch (filter.type) {
    case FILTER_TYPES.TEXT_INPUT: {
      return <TextInput {...filter} />
    }
    case FILTER_TYPES.TEXT_AREA: {
      return <TextArea {...filter} />
    }
    case FILTER_TYPES.CHECKBOX_GROUP: {
      return <CheckboxGroup {...filter} />
    }
    case FILTER_TYPES.RADIO_GROUP: {
      return <RadioGroup {...filter} />
    }
    case FILTER_TYPES.SELECT: {
      return <Dropdown {...filter} />
    }
    default:
      return null;
  }
}

export default FilterComponent
