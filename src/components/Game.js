import React from 'react';
import Grid from './Grid';
import Controls from './Controls';
import { GENERATION_TIME, createWorld, nextGeneration } from '../game';

class Game extends React.Component {

  state = {
    world: createWorld(),
    generation: 0,
    playing: false,
  }

  changeState = (world, generation) => this.setState({
    world: world,
    generation: generation,
  });

  onChange = world => this.changeState(world, this.state.generation + 1);

  onNext = () => this.onChange(nextGeneration(this.state.world));

  onPlay = () => {
    this.setState({ playing: true });
    this.interval = setInterval(() => this.onNext(), GENERATION_TIME);
  }

  onStop = () => {
    this.setState({ playing: false });
    clearInterval(this.interval);
  }

  render() {
    const { world, playing } = this.state;
    return (
      <>
        <Grid world={world} onChange={this.onChange} />
        <Controls
          play={this.onPlay}
          stop={this.onStop}
          playing={playing}
        />
        <p>Tick: {this.state.generation}</p>
      </>
    );
  }

}

export default Game;
