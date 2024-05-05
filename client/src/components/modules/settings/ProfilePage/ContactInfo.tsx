import { Card, CardContent } from "@mui/material";

import ProfileInfoBox from "./ProfileInfoBox";
import ProfileCardTitle from "./ProfileCardTitle";
import styles from "../Settings.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const ContactInfo = () => {
  const { user } = useSelector((state: RootState) => state.auth.profileData);
  return (
    <Card className={styles.profileSectionCard}>
      <CardContent>
        <ProfileCardTitle title="Contact info" />
      </CardContent>
      <ProfileInfoBox
        title="Email"
        value={user.email}
        contentClass={"borderTop0"}
      />
      {/* <ProfileInfoBox title="Phone" value={user.phone} /> */}
    </Card>
  );
};

export default ContactInfo;
