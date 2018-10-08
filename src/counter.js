import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
}

Counter.propTypes = { value: PropTypes.number.isRequired };
export default Counter;
