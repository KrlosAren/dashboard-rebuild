import { createContext } from 'react';
import useInitialState from 'src/hooks/useInitialState';

export const AppContext: any = createContext({});

const AppProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
