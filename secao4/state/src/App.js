import './App.css';
import React from 'react';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

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
        <div className="App">
          <h2>{value}</h2>
          <PlusButton onClick={this.handlePlusValue} />
          <MinusButton onClick={this.handleMinusValue} />
        </div>
      </div>
    );
  }
}

export default App;
