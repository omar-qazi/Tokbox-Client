import React from 'react';
import { RoomInput } from './RoomInput';
import { createRoom, joinRoom } from '../utils/opentok/opentok';

interface props {}

export const WaitingRoom: React.FC<props> = () => {
  return (
    <div className="mt-48 flex flex-col justify-center items-center">
      <RoomInput
        placeholder="Room Name:"
        buttonText="Create"
        callback={createRoom}
      />

      <RoomInput
        placeholder="Room Name:"
        buttonText="Join"
        callback={joinRoom}
      />
    </div>
  );
};
