import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.counter}</h1>
        <button className="inc" onClick={this.increment}>
          Counter
        </button>
        <button className="dec" onClick={this.decrement}>
          Dec
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
