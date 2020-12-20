import React, { useReducer } from 'react';
import './App.css';

import Trigger from './components/Trigger';
import { useFilters } from './hooks';

export const FiltersContext = React.createContext();

function App() {
  const [filters, dispatch] = useFilters();
  return (
    <div className="App">
      <FiltersContext.Provider value={[filters, dispatch]}>
        <Trigger />
      </FiltersContext.Provider>
    </div>
  );
}

export default App;
