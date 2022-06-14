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
        <input type="button" value="Add" onClick={addEducationExperience} />
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
                      className="noselect"
                      onClick={() => removeEducationExperience(education.id)}
                    >
                      <span class="text">Delete</span>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
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
