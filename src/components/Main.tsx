import React from 'react';
import Header from './Header';
import { RoomInput } from './RoomInput';
import { createRoom } from '../utils/opentok/opentok';
import { Global } from '../state/Global';
import { Label } from './Label';
import { Video } from './Video';

interface props {}

const Main: React.FC<props> = () => {
  return (
    <Global>
      <div className="h-screen">
        <Header />
        <div className="mt-48 flex flex-col justify-center items-center">
          <RoomInput
            placeholder="Room Name:"
            buttonText="Create"
            callback={createRoom}
          />
          <RoomInput
            placeholder="Room Name:"
            buttonText="Join"
            callback={createRoom}
          />
        </div>
      </div>
      <Video />
    </Global>
  );
};

export default Main;

{
  /* <div className="h-screen flex justify-center ">
      <div className="m-auto">
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }
                >
                  Join Room
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? 'bg-blue-500 text-white '
                      : 'bg-white text-black'
                  }
                >
                  Create Room
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div> */
}
