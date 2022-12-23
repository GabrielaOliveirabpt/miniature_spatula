import React, { useState } from 'react';
import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [selectedRecipes, setSelectedRecipes] =  useState([]); 

  return (
    <AppContext.Provider value={{selectedRecipes, setSelectedRecipes}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}