import { ProfileInfo } from "./ProfileInfo";
import { EducationInfo } from "./EducationInfo";
import { WorkInfo } from "./WorkInfo";

export const CVForm = ({
  firstName,
  lastName,
  email,
  phone,
  schoolName,
  schoolCity,
  subject,
  schoolFrom,
  schoolTo,
  workPosition,
  workCompany,
  workCity,
  workFrom,
  workTo,
  workExperiences,
  educationList,
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
  createCv,
  downloadCv,
  profile,
  defineProfile,
}) => {
  return (
    <form>
      <div className="form">
        <ProfileInfo
          defineFirstName={defineFirstName}
          defineLastName={defineLastName}
          defineEmail={defineEmail}
          definePhone={definePhone}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          profile={profile}
          defineProfile={defineProfile}
        />
        <EducationInfo
          defineSchoolName={defineSchoolName}
          defineSchoolCity={defineSchoolCity}
          defineSubject={defineSubject}
          defineSchoolFrom={defineSchoolFrom}
          defineSchoolTo={defineSchoolTo}
          addEducationExperience={addEducationExperience}
          educationList={educationList}
          removeEducationExperience={removeEducationExperience}
          schoolName={schoolName}
          schoolCity={schoolCity}
          subject={subject}
          schoolFrom={schoolFrom}
          schoolTo={schoolTo}
        />
        <WorkInfo
          defineWorkPosition={defineWorkPosition}
          defineWorkCompany={defineWorkCompany}
          defineWorkCity={defineWorkCity}
          defineWorkFrom={defineWorkFrom}
          defineWorkTo={defineWorkTo}
          workExperiences={workExperiences}
          workPosition={workPosition}
          workCompany={workCompany}
          workCity={workCity}
          workFrom={workFrom}
          workTo={workTo}
          addWorkExperience={addWorkExperience}
          removeWorkExperience={removeWorkExperience}
        />
      </div>
      <div className="button-div">
        <button type="submit" className="create" onClick={createCv}>
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
        <button className="download-button" type="button" onClick={downloadCv}>
          <div className="docs">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              height="20"
              width="20"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line y2="13" x2="8" y1="13" x1="16"></line>
              <line y2="17" x2="8" y1="17" x1="16"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>{" "}
            Docs
          </div>
          <div className="download">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line y2="3" x2="12" y1="15" x1="12"></line>
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
};
