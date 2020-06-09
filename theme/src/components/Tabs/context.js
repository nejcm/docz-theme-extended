import {createContext, useContext} from 'react';

export const TabsContext = createContext();
export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tab compound component cannot be rendered outside the Tabs component`,
    );
  }
  return context;
};
