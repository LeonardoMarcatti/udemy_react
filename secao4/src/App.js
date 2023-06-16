import './App.css';
import React from 'react';
import Button from './Button';
import Wrap from './Wrap';

class App extends React.Component {
  state = {
    value: 0
  }

  handlePlusValue = () => this.setState((prevState) => ({ value: prevState.value + 1 }));
  handleMinusValue = () => this.setState((prevState) => ({ value: prevState.value - 1 }));

  render() {
    const { value } = this.state;
    return (
      <div className="App-header">
        <Wrap className="App">
          <h2>{value}</h2>
          <Button click={this.handlePlusValue} className="btn-danger" text="Click +"/>
          <Button click={this.handleMinusValue} className="btn-success" text="Click -"/>
        </Wrap>
      </div>
    );
  }
}

export default App;
