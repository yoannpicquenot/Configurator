import React from 'react';

import { Grow } from '@material-ui/core';

import './Home.css';

export default function Home() {
  const welcome = () => (
    <div className="welcome-message">
      <Grow in timeout={1000}>
        <h1>Welcome!</h1>
      </Grow>
      <Grow in timeout={1500}>
        <p>
          This website is a tool to help you create a configuration for a Minecraft Server.
          <br />
          You can save several settings sets.
        </p>
      </Grow>
    </div>
  );

  return (
    <main className="Page HomePage">
      { welcome() }
    </main>
  );
}
