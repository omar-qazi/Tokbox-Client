import React from 'react';

export interface ISessionData {
  sessionId: string;
  sessionToken: string;
  sessionStatus: string;
}

export interface IRoomData {
  roomName: string;
}

export type IGlobalData = ISessionData & IRoomData;

interface IGlobalConext {
  data: IGlobalData;
  setData: Function;
}

export const initialDataValue: IGlobalData = {
  sessionId: '',
  sessionToken: '',
  sessionStatus: '',
  roomName: '',
};

export const initialValue: IGlobalConext = {
  data: initialDataValue,
  setData: () => true,
};

export const GlobalContext = React.createContext(initialValue);
