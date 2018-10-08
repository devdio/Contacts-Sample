import React, { Component } from "react";
import ContactInfo from "./contact-info.js";
import ContactDetails from "./contact-details.js";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: "",
      contactData: [
        { name: "Abett", phone: "010-0000-0001" },
        { name: "Betty", phone: "010-0000-0002" },
        { name: "Charlie", phone: "010-0000-0003" },
        { name: "David", phone: "010-0000-0004" }
      ]
    };
  }

  handleChange = event => {
    this.setState({
      keyword: event.target.value
    });
  };

  handleClick = key => {
    this.setState({
      selectedKey: key
    });
    console.log(key);
  };

  render() {
    const mapToComponent = data => {
      data.sort();
      data = data.filter(
        contact =>
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
      );
      return data.map((contact, index) => (
        <ContactInfo
          contact={contact}
          key={index}
          onClick={() => this.handleClick(index)}
        />
      ));
    };
    return (
      <div>
        <h1>Contacts</h1>
        <input
          onChange={this.handleChange}
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
        />
        <div>{mapToComponent(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey !== -1}
          contact={this.state.contactData[this.state.selectedKey]}
        />
      </div>
    );
  }
}

export default Contact;
