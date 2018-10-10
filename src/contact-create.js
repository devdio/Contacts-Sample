import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
  }

  handleChange = event => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  handleClick = () => {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    this.props.onCreate(contact);
    this.setState({ name: "", phone: "" });
  };
  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func,
  contact: PropTypes.object
};

ContactCreate.defaultProps = {
  onCreate: () => console.error("onCreate not defined"),
  contact: { name: "", phone: "" }
};

export default ContactCreate;
