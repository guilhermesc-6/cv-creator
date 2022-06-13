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
      addEducationExperience,
      educationList,
      removeEducationExperience,
      schoolName,
      schoolCity,
      subject,
      schoolFrom,
      schoolTo,
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
          value={schoolName}
        />
        <label htmlFor="university-city">City</label>
        <input
          type="text"
          id="university-city"
          onChange={defineSchoolCity}
          placeholder="City"
          value={schoolCity}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          onChange={defineSubject}
          placeholder="Subject"
          value={subject}
        />
        <label htmlFor="date-from">From</label>
        <input
          type="text"
          id="date-from"
          placeholder="Year"
          onChange={defineSchoolFrom}
          value={schoolFrom}
        />
        <label htmlFor="date-to">To:</label>
        <input
          type="text"
          id="date-to"
          placeholder="Year"
          onChange={defineSchoolTo}
          value={schoolTo}
        />
        <input type="button" value="add" onClick={addEducationExperience} />
        <div className="education-list">
          {educationList.length > 0
            ? educationList.map((education) => {
                return (
                  <div className="education" key={education.id}>
                    <span>Name: {`${education.name}`}</span>
                    <span>Subject: {`${education.subject}`}</span>
                    <span>City: {`${education.city}`}</span>
                    <span>From: {`${education.from}`}</span>
                    <span>To: {`${education.to}`}</span>
                    <button
                      type="button"
                      onClick={() => removeEducationExperience(education.id)}
                    >
                      remove
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
      </fieldset>
    );
  }
}
