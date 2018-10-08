import React, { Component } from "react";

class ContactDetails extends Component {
  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    return (
      <div>
        <h1>Details</h1>
        <div>{details}</div>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact:{ name:'', phone:''}
}

export default ContactDetails;
