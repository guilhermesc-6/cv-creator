import { Component } from "react";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      defineSchoolName,
      defineSchoolCity,
      defineSubject,
      defineSchoolFrom,
      defineSchoolTo,
    } = this.props;
    return (
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="school">University Name:</label>
        <input
          type="text"
          id="school"
          onChange={defineSchoolName}
          placeholder="University name"
        />
        <label htmlFor="university-city">City</label>
        <input
          type="text"
          id="university-city"
          onChange={defineSchoolCity}
          placeholder="City"
        />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          onChange={defineSubject}
          placeholder="Subject"
        />
        <label htmlFor="date-from">From</label>
        <input
          type="text"
          id="date-from"
          placeholder="Year"
          onChange={defineSchoolFrom}
        />
        <label htmlFor="date-to">To:</label>
        <input
          type="text"
          id="date-to"
          placeholder="Year"
          onChange={defineSchoolTo}
        />
      </fieldset>
    );
  }
}
