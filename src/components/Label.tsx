import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';

interface props {}

export const Label: React.FC<props> = () => {
  const context = useContext(GlobalContext);

  return <div>{context.data.sessionId}</div>;
};
