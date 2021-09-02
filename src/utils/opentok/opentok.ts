import { ISessionData } from './../../state/GlobalContext';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const opentokServerPath =
  process.env.OPENTOK_SERVER_PATH ||
  'https://live-session-backend.herokuapp.com/api/v1/room/';

export async function createRoom(room: string): Promise<ISessionData> {
  return runCreateOrJoinRoom(room);
}

export async function joinRoom(room: string): Promise<ISessionData> {
  return runCreateOrJoinRoom(room);
}

async function runCreateOrJoinRoom(room: string): Promise<ISessionData> {
  console.log(opentokServerPath);
  try {
    const response = await axios.get(`${opentokServerPath}${room}`);
    console.log(response);

    const sessionData: ISessionData = {
      sessionId: response.data.sessionId,
      sessionToken: response.data.token,
      sessionStatus: 'ok',
    };
    return sessionData;
  } catch (error) {
    console.error(error);
    return { sessionId: '', sessionToken: '', sessionStatus: 'error' };
  }
}
