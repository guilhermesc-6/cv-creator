import { Component } from "react";

import { ProfileInfo } from "./ProfileInfo";
import { EducationInfo } from "./EducationInfo";
import { WorkInfo } from "./WorkInfo";

export class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      states,
      defineFirstName,
      defineLastName,
      defineEmail,
      definePhone,
      defineSchoolName,
      defineSchoolCity,
      defineSubject,
      defineSchoolFrom,
      defineSchoolTo,
      addEducationExperience,
      removeEducationExperience,
      defineWorkPosition,
      defineWorkCompany,
      defineWorkCity,
      defineWorkFrom,
      defineWorkTo,
      addWorkExperience,
      removeWorkExperience,
      resetForm,
    } = this.props;

    return (
      <form>
        <div className="form">
          <ProfileInfo
            defineFirstName={defineFirstName}
            defineLastName={defineLastName}
            defineEmail={defineEmail}
            definePhone={definePhone}
            firstName={states.firstName}
            lastName={states.lastName}
            email={states.email}
            phone={states.phone}
          />
          <EducationInfo
            defineSchoolName={defineSchoolName}
            defineSchoolCity={defineSchoolCity}
            defineSubject={defineSubject}
            defineSchoolFrom={defineSchoolFrom}
            defineSchoolTo={defineSchoolTo}
            addEducationExperience={addEducationExperience}
            educationList={states.educationList}
            removeEducationExperience={removeEducationExperience}
            schoolName={states.schoolName}
            schoolCity={states.schoolCity}
            subject={states.subject}
            schoolFrom={states.schoolFrom}
            schoolTo={states.schoolTo}
          />
          <WorkInfo
            defineWorkPosition={defineWorkPosition}
            defineWorkCompany={defineWorkCompany}
            defineWorkCity={defineWorkCity}
            defineWorkFrom={defineWorkFrom}
            defineWorkTo={defineWorkTo}
            workExperiences={states.workExperiences}
            workPosition={states.workPosition}
            workCompany={states.workCompany}
            workCity={states.workCity}
            workFrom={states.workFrom}
            workTo={states.workTo}
            addWorkExperience={addWorkExperience}
            removeWorkExperience={removeWorkExperience}
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
          <button className="reset" type="button" onClick={resetForm}>
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
