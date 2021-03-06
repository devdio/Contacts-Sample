import React, { Component } from "react";
import ContactInfo from "./contact-info.js";
import ContactDetails from "./contact-details.js";
import ContactCreate from "./contact-create.js";
import update from "immutability-helper";

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

  componentWillMount() {
    const contactData = localStorage.contactData;
    if (contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringigy(prevState.contactData) !==
      JSON.stringify(this.state.contactData)
    ) {
      localStorage.contact = JSON.stringify(this.state.contactData);
    }
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

  handleCreate = contact => {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] })
    });
  };

  handleRemove = () => {
    if (this.state.selectedKey === -1) return;
    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]]
      }),
      selectedKey: -1
    });
  };

  handleEdit = (name, phone) => {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone }
        }
      })
    });
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
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default Contact;
