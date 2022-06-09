import { Component } from "react";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { defineFirstName, defineLastName, defineEmail, definePhone } =
      this.props;
    return (
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="school">School Name:</label>
        <input type="text" id="school" />
        <label htmlFor="university-city">City</label>
        <input type="text" id="university-city" />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" />
        <label htmlFor="date-from">From</label>
        <input type="text" id="date-from" />
        <label htmlFor="date-to">To:</label>
        <input type="text" id="date-to" />
      </fieldset>
    );
  }
}
