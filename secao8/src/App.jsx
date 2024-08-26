import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';
import React from 'react';

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="easy" targetTime={1}/>
        <Timer title="Medium" targetTime={5}/>
        <Timer title="hard" targetTime={10}/>
        <Timer title="very hard" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
