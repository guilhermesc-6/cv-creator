export const Viewer = ({
  firstName,
  lastName,
  email,
  phone,
  generateCv,
  workExperiences,
  educationList,
  profile,
}) => {
  return (
    <div className="viewer">
      <div className="resume">
        {generateCv ? (
          <>
            <div className="profile">
              <h1>
                {firstName} {lastName}
              </h1>
              <p>email: {email}</p>
              <p>phone: {phone}</p>
              <span>Profile:</span>
              <p className="profile-text">{profile}</p>
            </div>
            <div className="infos">
              <div className="educations">
                <h1>Education.</h1>

                {educationList.length > 0
                  ? educationList.map((education) => {
                      return (
                        <div className="education-info" key={education.id}>
                          <h2>{education.name}</h2>
                          <p>{education.subject}</p>
                          <p>{education.city}</p>
                          <p>from: {education.from}</p>
                          <p>to: {education.to}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
              <div className="works">
                <h1>Work Experience.</h1>
                {workExperiences.length > 0
                  ? workExperiences.map((work) => {
                      return (
                        <div className="work-info" key={work.id}>
                          <h2>Position: {work.position}</h2>
                          <p>{work.company}</p>
                          <p>{work.city}</p>
                          <p>from: {work.from}</p>
                          <p>to: {work.to}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="profile">
              <h1>full name</h1>
              <p>email</p>
              <p>phone</p>
            </div>
            <div className="infos">
              <div className="educations">
                <h1>Education.</h1>
                <div className="education-info">
                  <h2>school name</h2>
                  <p>subject</p>
                  <p>city</p>
                  <p>from</p>
                  <p>to</p>
                </div>
                <div className="education-info">
                  <h2>school name</h2>
                  <p>subject</p>
                  <p>city</p>
                  <p>from</p>
                  <p>to</p>
                </div>
              </div>
              <div className="works">
                <h1>Work Experience.</h1>
                <div className="work-info">
                  <h2>position</h2>
                  <p>company</p>
                  <p>city</p>
                  <p>from</p>
                  <p>to</p>
                </div>
                <div className="work-info">
                  <h2>position</h2>
                  <p>company</p>
                  <p>city</p>
                  <p>from</p>
                  <p>to</p>
                </div>
                <div className="work-info">
                  <h2>position</h2>
                  <p>company</p>
                  <p>city</p>
                  <p>from</p>
                  <p>to</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
