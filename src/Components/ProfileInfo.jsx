import { Component } from "react";

export class ProfileInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { defineFirstName, defineLastName, defineEmail, definePhone } =
      this.props;
    return (
      <fieldset>
        <legend>Personal information</legend>
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your first name"
          onChange={defineFirstName}
        />
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          placeholder="Enter your last name"
          onChange={defineLastName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email@email.com"
          onChange={defineEmail}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          placeholder="(00) 000000000"
          onChange={definePhone}
        />
      </fieldset>
    );
  }
}
