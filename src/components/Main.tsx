import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { Global } from '../state/Global';
import { MeetingRoom } from './MeetingRoom';
import { WaitingRoom } from './WaitingRoom';

interface props {}

export const Main: React.FC<props> = () => {
  return (
    <Router>
      <Global>
        <div className="h-screen flex flex-col">
          <Header />
          <Switch>
            <Route exact path="/" component={WaitingRoom} />
            <Route path="/room" component={MeetingRoom} />
          </Switch>
        </div>
      </Global>
    </Router>
  );
};
