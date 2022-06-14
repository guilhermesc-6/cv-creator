import { Component } from "react";

export class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      defineWorkPosition,
      defineWorkCompany,
      defineWorkCity,
      defineWorkFrom,
      defineWorkTo,
      workExperiences,
      workPosition,
      workCompany,
      workCity,
      workFrom,
      workTo,
      addWorkExperience,
      removeWorkExperience,
    } = this.props;

    return (
      <fieldset>
        <legend>Work Expirience</legend>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          placeholder="Work Position"
          onChange={defineWorkPosition}
          value={workPosition}
        />
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          onChange={defineWorkCompany}
          value={workCompany}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          placeholder="City"
          onChange={defineWorkCity}
          value={workCity}
        />
        <label htmlFor="work-from">From:</label>
        <input
          type="text"
          id="work-from"
          placeholder="Year"
          onChange={defineWorkFrom}
          value={workFrom}
        />
        <label htmlFor="work-to">To:</label>
        <input
          type="text"
          id="work-to"
          placeholder="Year"
          onChange={defineWorkTo}
          value={workTo}
        />
        <input type="button" value="Add" onClick={addWorkExperience} />
        <div className="work-list">
          {workExperiences.length > 0
            ? workExperiences.map((work) => {
                return (
                  <div className="work" key={work.id}>
                    <span>company: {`${work.company}`}</span>
                    <span>position: {`${work.position}`}</span>
                    <span>city: {`${work.city}`}</span>
                    <span>from: {`${work.from}`}</span>
                    <span>to: {`${work.to}`}</span>
                    <button
                      type="button"
                      onClick={() => removeWorkExperience(work.id)}
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
