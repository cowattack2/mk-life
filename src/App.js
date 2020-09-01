import React, { Component } from 'react';
import Game from './components/Game';
class App extends Component {

  render() {
    return (
      <>
        <h1>Game Of Life</h1>
        <p>Click on the squares to change state</p>
        <Game />
      </>
    );
  }
}

export default App;
