import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { CVForm } from "./Components/CVForm";
import { Viewer } from "./Components/Viewer";
import { v4 as uuid } from "uuid";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [subject, setSubject] = useState("");
  const [schoolFrom, setSchoolFrom] = useState("");
  const [schoolTo, setSchoolTo] = useState("");
  const [workPosition, setWorkPosition] = useState("");
  const [workCompany, setWorkCompany] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [workTo, setWorkTo] = useState("");
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [generateCv, setGenerateCv] = useState(false);

  const defineFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const defineLastName = (e) => {
    setLastName(e.target.value);
  };
  const defineEmail = (e) => {
    setEmail(e.target.value);
  };
  const definePhone = (e) => {
    setPhone(e.target.value);
  };
  const defineProfile = (e) => {
    setProfile(e.target.value);
  };
  const defineSchoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const defineSchoolCity = (e) => {
    setSchoolCity(e.target.value);
  };
  const defineSubject = (e) => {
    setSubject(e.target.value);
  };
  const defineSchoolFrom = (e) => {
    setSchoolFrom(e.target.value);
  };
  const defineSchoolTo = (e) => {
    setSchoolTo(e.target.value);
  };
  const defineWorkPosition = (e) => {
    setWorkPosition(e.target.value);
  };
  const defineWorkCompany = (e) => {
    setWorkCompany(e.target.value);
  };
  const defineWorkCity = (e) => {
    setWorkCity(e.target.value);
  };
  const defineWorkFrom = (e) => {
    setWorkFrom(e.target.value);
  };
  const defineWorkTo = (e) => {
    setWorkTo(e.target.value);
  };

  //add a new object of work information in the workExperiences array
  const addWorkExperience = () => {
    setWorkExperiences(
      workExperiences.concat({
        id: uuid(),
        position: workPosition,
        company: workCompany,
        city: workCity,
        from: workFrom,
        to: workTo,
      })
    );
    setWorkPosition("");
    setWorkCompany("");
    setWorkCity("");
    setWorkFrom("");
    setWorkTo("");
  };

  //remove the object of work information in the workExperiences array
  const removeWorkExperience = (id) => {
    const result = workExperiences.filter((work) => work.id !== id);
    setWorkExperiences(result);
  };

  //add a new object of education information in the educationList array
  const addEducationExperience = () => {
    setEducationList(
      educationList.concat({
        id: uuid(),
        name: schoolName,
        city: schoolCity,
        subject: subject,
        from: schoolFrom,
        to: schoolTo,
      })
    );
    setSchoolName("");
    setSchoolCity("");
    setSubject("");
    setSchoolFrom("");
    setSchoolTo("");
  };

  //remove the object of educetion information in the educationList array
  const removeEducationExperience = (id) => {
    const result = educationList.filter((edu) => edu.id !== id);
    setEducationList(result);
  };

  // Reset all the fields in the form
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSchoolName("");
    setSchoolCity("");
    setSubject("");
    setSchoolFrom("");
    setSchoolTo("");
    setWorkPosition("");
    setWorkCompany("");
    setWorkCity("");
    setWorkFrom("");
    setWorkTo("");
    setWorkExperiences([]);
    setEducationList([]);
    setGenerateCv(false);
    setProfile("");
  };

  const createCv = (e) => {
    e.preventDefault();
    setGenerateCv(true);
  };

  const downloadCv = () => {
    window.print();
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <CVForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          schoolName={schoolName}
          schoolCity={schoolCity}
          subject={subject}
          schoolFrom={schoolFrom}
          schoolTo={schoolTo}
          workPosition={workPosition}
          workCompany={workCompany}
          workCity={workCity}
          workFrom={workFrom}
          workTo={workTo}
          workExperiences={workExperiences}
          educationList={educationList}
          defineFirstName={defineFirstName}
          defineLastName={defineLastName}
          defineEmail={defineEmail}
          definePhone={definePhone}
          defineSchoolName={defineSchoolName}
          defineSchoolCity={defineSchoolCity}
          defineSubject={defineSubject}
          defineSchoolFrom={defineSchoolFrom}
          defineSchoolTo={defineSchoolTo}
          addEducationExperience={addEducationExperience}
          removeEducationExperience={removeEducationExperience}
          defineWorkPosition={defineWorkPosition}
          defineWorkCompany={defineWorkCompany}
          defineWorkCity={defineWorkCity}
          defineWorkFrom={defineWorkFrom}
          defineWorkTo={defineWorkTo}
          addWorkExperience={addWorkExperience}
          removeWorkExperience={removeWorkExperience}
          resetForm={resetForm}
          createCv={createCv}
          downloadCv={downloadCv}
          profile={profile}
          defineProfile={defineProfile}
        />
        <Viewer
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          generateCv={generateCv}
          workExperiences={workExperiences}
          educationList={educationList}
          profile={profile}
        />
      </div>
    </div>
  );
};

export default App;
