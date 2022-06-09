import { Component } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { EducationInfo } from "./EducationInfo";
import { WorkInfo } from "./WorkInfo";

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
      schoolTo: "",
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
    this.defineSchoolName = this.defineSchoolName.bind(this);
    this.defineSchoolCity = this.defineSchoolCity.bind(this);
    this.defineSubject = this.defineSubject.bind(this);
    this.defineSchoolFrom = this.defineSchoolFrom.bind(this);
    this.defineSchoolTo = this.defineSchoolTo.bind(this);
    this.defineWorkPosition = this.defineWorkPosition.bind(this);
    this.defineWorkCompany = this.defineWorkCompany.bind(this);
    this.defineWorkCity = this.defineWorkCity.bind(this);
    this.defineWorkFrom = this.defineWorkFrom.bind(this);
    this.defineWorkTo = this.defineWorkTo.bind(this);
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

  defineSchoolName(e) {
    this.setState({
      schoolName: e.target.value,
    });
  }
  defineSchoolCity(e) {
    this.setState({
      schoolCity: e.target.value,
    });
  }
  defineSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }
  defineSchoolFrom(e) {
    this.setState({
      schoolFrom: e.target.value,
    });
  }
  defineSchoolTo(e) {
    this.setState({
      schoolTo: e.target.value,
    });
  }
  defineWorkPosition(e) {
    this.setState({
      workPosition: e.target.value,
    });
  }
  defineWorkCompany(e) {
    this.setState({
      workCompany: e.target.value,
    });
  }
  defineWorkCity(e) {
    this.setState({
      workCity: e.target.value,
    });
  }
  defineWorkFrom(e) {
    this.setState({
      workFrom: e.target.value,
    });
  }
  defineWorkTo(e) {
    this.setState({
      workTo: e.target.value,
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
        <EducationInfo
          defineSchoolName={this.defineSchoolName}
          defineSchoolCity={this.defineSchoolCity}
          defineSubject={this.defineSubject}
          defineSchoolFrom={this.defineSchoolFrom}
          defineSchoolTo={this.defineSchoolTo}
        />
        <WorkInfo
          defineWorkPosition={this.defineWorkPosition}
          defineWorkCompany={this.defineWorkCompany}
          defineWorkCity={this.defineWorkCity}
          defineWorkFrom={this.defineWorkFrom}
          defineWorkTo={this.defineWorkTo}
        />
        <div className="button-div">
          <button type="submit">Create</button>
          <button>Reset</button>
        </div>
      </form>
    );
  }
}
