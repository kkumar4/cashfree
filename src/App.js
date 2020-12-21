import React from 'react';
import './App.css';

import Trigger from './components/Trigger';
import { useFilters } from './hooks';

export const FiltersContext = React.createContext();
export const FiltersDispatchContext = React.createContext();

function App() {
  const [filters, dispatch] = useFilters();
  return (
    <div className="App">
      <FiltersContext.Provider value={filters}>
        <FiltersDispatchContext.Provider value={dispatch}>
          <Trigger />
        </FiltersDispatchContext.Provider>
      </FiltersContext.Provider>
    </div>
  );
}

export default App;
