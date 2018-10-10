import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: "",
      phone: ""
    };
  }

  handleClick = event => {
    this.props.onRemove();
  };

  handleToggle = () => {
    if (!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit
    });
  };

  handleChange = event => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  handleEdit = () => {
    this.props.onEdit(this.state.name, this.state.phone);
  };

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    const editform = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
    const view = this.state.isEdit ? editform : details;
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h1>Details</h1>
        <div>{this.props.isSelected ? view : blank}</div>

        {this.props.isSelected ? (
          <div>
            <p>
              <button onClick={this.handleClick}>Remove</button>
              <button onClick={this.handleToggle}>
                {this.state.isEdit ? "OK" : "Edit"}
              </button>
            </p>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: { name: "", phone: "" },
  onRemove: () => console.error("onRemove not defined"),
  onEdit: () => console.error("onEdit not defined")
};

ContactDetails.propTypes = {
  contact: PropTypes.object,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func
};

export default ContactDetails;
