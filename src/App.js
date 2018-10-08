import React, { Component } from "react";
// import PropTypes from "prop-types";
import Contact from "./contact.js";

class App extends Component {
  state = { value: 0 };

  constructor() {
    super();
    this.state.value = 0;
  }

  render() {
    return <Contact />;
  }
}

export default App;
