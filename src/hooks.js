import { useContext, useEffect, useReducer } from 'react';

import { FILTER_TYPES } from './Constants';
import { FiltersDispatchContext } from './App';

export const FILTER_ACTIONS = {
  CLEAR_ALL: 'CLEAR_ALL',
  SET_NEW_VALUE: 'SET_NEW_VALUE',
  APPLY_FILTERS: 'APPLY_FILTERS'
}

export function useFilters() {
  const initialState = [
    {
      type: FILTER_TYPES.TEXT_INPUT,
      label: 'Name',
      name: 'name',
      value: ''
    },
    {
      type: FILTER_TYPES.TEXT_INPUT,
      label: 'Age',
      name: 'age',
      value: ''
    },
    {
      type: FILTER_TYPES.TEXT_AREA,
      label: 'About',
      name: 'about',
      value: ''
    },
    {
      type: FILTER_TYPES.CHECKBOX_GROUP,
      label: 'Languages',
      name: 'languages',
      options: [
        {
          id: 'language-0',
          value: 'Hindi'
        },
        {
          id: 'language-1',
          value: 'English'
        },
        {
          id: 'language-2',
          value: 'French'
        },
      ],
      selected: []
    },
    {
      type: FILTER_TYPES.CHECKBOX_GROUP,
      label: 'Hobbies',
      name: 'hobbies',
      options: [
        {
          id: 'Hobbies-0',
          value: 'Travelling'
        },
        {
          id: 'Hobbies-1',
          value: 'Reading'
        },
        {
          id: 'Hobbies-2',
          value: 'Watching Movies'
        },
      ],
      selected: []
    },
    {
      type: FILTER_TYPES.RADIO_GROUP,
      label: 'Gender',
      name: 'gender',
      options: [
        {
          id: 'gender-0',
          value: 'Male'
        },
        {
          id: 'gender-1',
          value: 'Female'
        }
      ],
      selected: ''
    },
    {
      type: FILTER_TYPES.SELECT,
      label: 'City',
      name: 'city',
      options: [
        {
          id: 'city-0',
          value: 'New Delhi',
        },
        {
          id: 'city-1',
          value: 'Bangalore',
        },
        {
          id: 'city-2',
          value: 'Hyderabad',
        },
        {
          id: 'city-3',
          value: 'Mumbai',
        },
        {
          id: 'city-4',
          value: 'Kolkata',
        }
      ],
      selected: ''
    },
    {
      type: FILTER_TYPES.SELECT,
      label: 'Country',
      name: 'country',
      options: [
        {
          id: 'country-0',
          value: 'India',
        },
        {
          id: 'country-1',
          value: 'Singapore',
        },
        {
          id: 'country-2',
          value: 'USA',
        },
      ],
      selected: ''
    }
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case FILTER_ACTIONS.CLEAR_ALL: {
        return state.map(filter => {
          if ([FILTER_TYPES.TEXT_INPUT, FILTER_TYPES.TEXT_AREA].includes(filter.type)) {
            return {
              ...filter,
              value: ''
            }
          } else if (filter.type === FILTER_TYPES.CHECKBOX_GROUP) {
            return {
              ...filter,
              selected: []
            }
          } else if ([FILTER_TYPES.RADIO_GROUP, FILTER_TYPES.SELECT].includes(filter.type)) {
            return {
              ...filter,
              selected: ''
            }
          } else {
            return filter;
          }
        })
      }
      case FILTER_ACTIONS.SET_NEW_VALUE: {
        const { name, newValue } = action.payload;
        return state.map(filter => {
          if (filter.name === name && [FILTER_TYPES.TEXT_INPUT, FILTER_TYPES.TEXT_AREA].includes(filter.type)) {
            return {
              ...filter,
              newValue
            }
          } else if (filter.name === name && [FILTER_TYPES.RADIO_GROUP, FILTER_TYPES.SELECT, FILTER_TYPES.CHECKBOX_GROUP].includes(filter.type)) {
            return {
              ...filter,
              newSelected: newValue
            }
          } else {
            return filter;
          }
        })
      }
      case FILTER_ACTIONS.APPLY_FILTERS: {
        return state.map(filter => {
          if ([FILTER_TYPES.TEXT_INPUT, FILTER_TYPES.TEXT_AREA].includes(filter.type)) {
            return {
              ...filter,
              value: filter.newValue
            }
          } else if ([FILTER_TYPES.RADIO_GROUP, FILTER_TYPES.SELECT, FILTER_TYPES.CHECKBOX_GROUP].includes(filter.type)) {
            return {
              ...filter,
              selected: filter.newSelected
            }
          } else {
            return filter;
          }
        })
      }
      default:
        return state;
    }
  }

  return useReducer(reducer, initialState);
}

export function useInput(name, value) {
  /**
   * returns the input change handler
   * sets newValue to value when mounted
   */
  const dispatch = useContext(FiltersDispatchContext);

  const setNewValue = _value => {
    dispatch({
      type: FILTER_ACTIONS.SET_NEW_VALUE,
      payload: {
        name,
        newValue: _value
      }
    })
  }

  useEffect(() => {
    setNewValue(value);
  }, []);

  const handleChange = event => {
    setNewValue(event.target.value);
  }

  return handleChange;
}