import { Component } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { EducationInfo } from "./EducationInfo";

export class CVForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolCity: "",
      subject: "",
      schoolFrom: "",
      schooleTo: "",
      workPosition: "",
      workCompany: "",
      workCity: "",
      workFrom: "",
      workTo: "",
    };

    this.defineFirstName = this.defineFirstName.bind(this);
    this.defineLastName = this.defineLastName.bind(this);
    this.defineEmail = this.defineEmail.bind(this);
    this.definePhone = this.definePhone.bind(this);
  }

  defineFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  defineLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  defineEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  definePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <ProfileInfo
          defineFirstName={this.defineFirstName}
          defineLastName={this.defineLastName}
          defineEmail={this.defineEmail}
          definePhone={this.definePhone}
        />
        <EducationInfo />
        <fieldset>
          <legend>Work Expirience</legend>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" />
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" />
          <label htmlFor="work-from">From:</label>
          <input type="text" id="work-from" />
          <label htmlFor="work-to">To:</label>
          <input type="text" id="work-to" />
        </fieldset>
        <div className="button-div">
          <button type="submit">Create</button>
          <button>Reset</button>
        </div>
        {console.log(this.state.lastName)}
      </form>
    );
  }
}
