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
        />
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          onChange={defineWorkCompany}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          placeholder="City"
          onChange={defineWorkCity}
        />
        <label htmlFor="work-from">From:</label>
        <input
          type="text"
          id="work-from"
          placeholder="Year"
          onChange={defineWorkFrom}
        />
        <label htmlFor="work-to">To:</label>
        <input
          type="text"
          id="work-to"
          placeholder="Year"
          onChange={defineWorkTo}
        />
      </fieldset>
    );
  }
}
