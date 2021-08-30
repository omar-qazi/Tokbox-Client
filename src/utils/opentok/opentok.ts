import { ISessionData } from './../../state/GlobalContext';
import axios from 'axios';

export async function createRoom(room: string): Promise<ISessionData> {
  try {
    const response = await axios.get(
      `https://tokbox-demo-backend.herokuapp.com/room/${room}`
    );
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

export async function joinRoom(room: string): Promise<string> {
  try {
    const response = await axios.get(
      `https://tokbox-demo-backend.herokuapp.com/room/${room}/`
    );
    console.log(response);
    return response.data.sessionId;
  } catch (error) {
    console.error(error);
    return '';
  }
}
