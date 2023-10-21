import React, { Component } from "react";

const buttonStyle = {
  backgroundColor: "yellow",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  margin: "0 20px",
};

class NumberCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1, 
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  decrementCount = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <button style={buttonStyle} onClick={this.decrementCount}>
          -
        </button>
        <span style={{ fontSize: "24px" }}>{this.state.count}</span>
        <button style={buttonStyle} onClick={this.incrementCount}>
          +
        </button>
      </div>
    );
  }
}

export default NumberCounter;
