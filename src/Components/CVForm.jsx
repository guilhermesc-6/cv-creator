import { Component } from "react";
import { v4 as uuid } from "uuid";
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
      workExperiences: [],
      educationList: [],
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
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
    this.addEducationExperience = this.addEducationExperience.bind(this);
    this.removeEducationExperience = this.removeEducationExperience.bind(this);
    this.resetForm = this.resetForm.bind(this);
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

  //add a new object of work information in the workExperiences array
  addWorkExperience() {
    this.setState({
      workExperiences: this.state.workExperiences.concat({
        id: uuid(),
        position: this.state.workPosition,
        company: this.state.workCompany,
        city: this.state.workCity,
        from: this.state.workFrom,
        to: this.state.workTo,
      }),
    });
    this.setState({
      workPosition: "",
      workCompany: "",
      workCity: "",
      workFrom: "",
      workTo: "",
    });
  }

  //remove the object of work information in the workExperiences array
  removeWorkExperience(id) {
    const result = this.state.workExperiences.filter((work) => work.id !== id);
    this.setState({
      workExperiences: result,
    });
  }

  //add a new object of education information in the educationList array
  addEducationExperience() {
    this.setState({
      educationList: this.state.educationList.concat({
        id: uuid(),
        name: this.state.schoolName,
        city: this.state.schoolCity,
        subject: this.state.subject,
        from: this.state.schoolFrom,
        to: this.state.schoolTo,
      }),
    });
    this.setState({
      schoolName: "",
      schoolCity: "",
      subject: "",
      schoolFrom: "",
      schoolTo: "",
    });
  }

  //remove the object of educetion information in the educationList array
  removeEducationExperience(id) {
    const result = this.state.educationList.filter((edu) => edu.id !== id);
    this.setState({
      educationList: result,
    });
  }

  // Reset all the fields in the form
  resetForm() {
    this.setState({
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
      workExperiences: [],
      educationList: [],
    });
  }

  render() {
    return (
      <form>
        <div className="form">
          <ProfileInfo
            defineFirstName={this.defineFirstName}
            defineLastName={this.defineLastName}
            defineEmail={this.defineEmail}
            definePhone={this.definePhone}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
          />
          <EducationInfo
            defineSchoolName={this.defineSchoolName}
            defineSchoolCity={this.defineSchoolCity}
            defineSubject={this.defineSubject}
            defineSchoolFrom={this.defineSchoolFrom}
            defineSchoolTo={this.defineSchoolTo}
            addEducationExperience={this.addEducationExperience}
            educationList={this.state.educationList}
            removeEducationExperience={this.removeEducationExperience}
            schoolName={this.state.schoolName}
            schoolCity={this.state.schoolCity}
            subject={this.state.subject}
            schoolFrom={this.state.schoolFrom}
            schoolTo={this.state.schoolTo}
          />
          <WorkInfo
            defineWorkPosition={this.defineWorkPosition}
            defineWorkCompany={this.defineWorkCompany}
            defineWorkCity={this.defineWorkCity}
            defineWorkFrom={this.defineWorkFrom}
            defineWorkTo={this.defineWorkTo}
            workExperiences={this.state.workExperiences}
            workPosition={this.state.workPosition}
            workCompany={this.state.workCompany}
            workCity={this.state.workCity}
            workFrom={this.state.workFrom}
            workTo={this.state.workTo}
            addWorkExperience={this.addWorkExperience}
            removeWorkExperience={this.removeWorkExperience}
          />
        </div>
        <div className="button-div">
          <button type="submit" className="create">
            Create
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          <button className="reset" type="button" onClick={this.resetForm}>
            Reset
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 25"
              >
                <path
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    );
  }
}
