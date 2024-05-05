
import ProfileInputElement from "./ProfileInputElement";

const ProfileEditForm = () => {
 
  return (
    <>
      <ProfileInputElement
        placeholder="Name"
        type="text"
        name="name"
        label="Full Name"
      />
      <ProfileInputElement
        placeholder="example@mail.com"
        type="email"
        name="email"
        label="Email"
        disabled={true}
      />
      <ProfileInputElement
        placeholder="+9764325*******"
        type="tel"
        name="phone"
        label="Phone Number"
      />
    </>
  );
};

export default ProfileEditForm;
