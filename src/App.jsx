import "./App.css";
import { Component } from "react";
import { Header } from "./Components/Header";
import { CVForm } from "./Components/CVForm";
import { Viewer } from "./Components/Viewer";
import { v4 as uuid } from "uuid";

class App extends Component {
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
      generateCv: false,
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
    this.createCv = this.createCv.bind(this);
    this.downloadCv = this.downloadCv.bind(this);
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
      generateCv: false,
    });
  }

  createCv(e) {
    e.preventDefault();
    this.setState({
      generateCv: true,
    });
  }

  downloadCv() {
    window.print();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <CVForm
            states={this.state}
            defineFirstName={this.defineFirstName}
            defineLastName={this.defineLastName}
            defineEmail={this.defineEmail}
            definePhone={this.definePhone}
            defineSchoolName={this.defineSchoolName}
            defineSchoolCity={this.defineSchoolCity}
            defineSubject={this.defineSubject}
            defineSchoolFrom={this.defineSchoolFrom}
            defineSchoolTo={this.defineSchoolTo}
            addEducationExperience={this.addEducationExperience}
            removeEducationExperience={this.removeEducationExperience}
            defineWorkPosition={this.defineWorkPosition}
            defineWorkCompany={this.defineWorkCompany}
            defineWorkCity={this.defineWorkCity}
            defineWorkFrom={this.defineWorkFrom}
            defineWorkTo={this.defineWorkTo}
            addWorkExperience={this.addWorkExperience}
            removeWorkExperience={this.removeWorkExperience}
            resetForm={this.resetForm}
            createCv={this.createCv}
            downloadCv={this.downloadCv}
          />
          <Viewer states={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
