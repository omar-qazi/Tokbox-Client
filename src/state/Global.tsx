import React from 'react';
import { useState } from 'react';
import { GlobalContext, IGlobalData, initialDataValue } from './GlobalContext';

interface props {}

export const Global: React.FC<props> = ({ children }) => {
  const [data, setData] = useState<IGlobalData>(initialDataValue);

  return (
    <GlobalContext.Provider value={{ data: data, setData: setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
