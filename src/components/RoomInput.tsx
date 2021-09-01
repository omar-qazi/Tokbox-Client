import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, ISessionData } from '../state/GlobalContext';

interface InputProps {
  placeholder: string;
  buttonText: string;
  callback: (roomId: string) => Promise<ISessionData>;
}

export const RoomInput: React.FC<InputProps> = ({
  placeholder,
  buttonText,
  callback,
}) => {
  const [sessionId, setSessionId] = useState('');
  const global = useContext(GlobalContext);

  const updateSessionId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSessionId(event.target.value);
  };

  return (
    <div className="flex items-end justify-center mb-8">
      <div className="md:w-96 w-52 flex flex-col mr-4">
        <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
          {placeholder}
        </label>
        <input
          onChange={updateSessionId}
          value={sessionId}
          type="text"
          id="hero-field"
          name="hero-field"
          className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-1 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-opacity-0 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-28">
        <Link to="room">
          <button
            className="w-full text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
            onClick={async () => {
              if (sessionId !== '') {
                const session = await callback(sessionId);
                global.setData({
                  sessionId: session.sessionId,
                  sessionToken: session.sessionToken,
                  sessionStatus: session.sessionStatus,
                  roomName: sessionId,
                });
                setSessionId('');
              }
            }}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};
