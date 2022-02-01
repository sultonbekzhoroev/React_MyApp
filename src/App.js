import React from "react";
import "./App.css";
import Button from "./components/buttons";

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
        <Button function={this.increment} btnName="increment" clsName="inc" />
        <Button function={this.decrement} btnName="dec" clsName="dec" />
        <Button function={this.reset} btnName="reset" clsName="res" />
      </div>
    );
  }
}

export default App;
