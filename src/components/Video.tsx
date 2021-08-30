import React, { useContext } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

import { GlobalContext } from '../state/GlobalContext';
import env from 'react-dotenv';

interface props {}

export const Video: React.FC<props> = () => {
  const global = useContext(GlobalContext);
  const apiKey = env.OPENTOK_API_KEY;

  return global.data.sessionStatus === 'ok' ? (
    <div className="bg-purple-50">
      <div className="bg-purple-100 w-full h-1 mt-2"></div>
      <div className="mt-4 mb-4 text-center">
        <h1 className="text-purple-900 text-2xl">{global.data.roomName}</h1>
      </div>
      <div className="flex justify-around">
        <OTSession
          apiKey={apiKey}
          sessionId={global.data.sessionId}
          token={global.data.sessionToken}
        >
          <div className="flex justify-around mt-2 border-solid border-blue-500 border-2">
            <OTPublisher />
          </div>
          <div className="flex flex-row w-full">
            <OTStreams>
              <div className="mt-2 border-solid border-black border-2">
                <OTSubscriber />
              </div>
            </OTStreams>
          </div>
        </OTSession>
      </div>

      <div className="bg-purple-100 w-full h-1 mt-4"></div>
    </div>
  ) : (
    <div></div>
  );
};
