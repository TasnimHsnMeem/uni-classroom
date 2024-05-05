import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";

import ProfileCardTitle from "./ProfileCardTitle";
import ProfileInfoBox from "./ProfileInfoBox";
import ProfileInfoWithImg from "./ProfileInfoWithImg";

import { RootState } from "../../../../redux/store";
import RoutingList from "../../../../utils/RoutingList";

import styles from "../Settings.module.scss";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const navigateToEditProfile = () => navigate(RoutingList.settings.edit);

  const { user } = useSelector((state: RootState) => state.auth.profileData);

  return (
    <>
      <Card className={styles.profileSectionCard}>
        <CardContent>
          <ProfileCardTitle
            title="Profile Info"
            subtitle="A photo help personalize your account"
            buttonTitle="Edit"
            buttonOnClick={navigateToEditProfile}
          />
          <ProfileInfoWithImg />
        </CardContent>
        {/* <ProfileInfoBox title="Name" value={user.name} /> */}
      </Card>
    </>
  );
};

export default ProfileInfo;
