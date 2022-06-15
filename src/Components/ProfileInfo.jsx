export const ProfileInfo = ({
  defineFirstName,
  defineLastName,
  defineEmail,
  definePhone,
  firstName,
  lastName,
  email,
  phone,
  profile,
  defineProfile,
}) => {
  return (
    <fieldset>
      <legend>Personal information</legend>
      <label htmlFor="name">First Name:</label>
      <input
        type="text"
        id="name"
        value={firstName}
        placeholder="Enter your first name"
        onChange={defineFirstName}
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        placeholder="Enter your last name"
        onChange={defineLastName}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="email@email.com"
        onChange={defineEmail}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        placeholder="(00) 000000000"
        onChange={definePhone}
      />
      <label htmlFor="profile-text">Profile:</label>
      <textarea
        name="profile-text"
        id="profile-text"
        onChange={defineProfile}
        value={profile}
      />
    </fieldset>
  );
};
