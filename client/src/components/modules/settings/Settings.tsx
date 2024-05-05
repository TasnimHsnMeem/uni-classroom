import {
    Box
} from "@mui/material";
import { FC } from "react";

import SettingsSteps from "./profileEdit/SettingsSteps";
import PasswordSection from "./ProfilePage/ChangePassword";
import ContactInfo from "./ProfilePage/ContactInfo";
import ProfileInfo from "./ProfilePage/ProfileInfo";
import styles from "./Settings.module.scss";

const Settings: FC = () => {
  return (
    <Box className={styles.settingsPage}>
      <SettingsSteps />
      <ProfileInfo />
      <ContactInfo />
      <PasswordSection/>
    </Box>
  );
};

export default Settings;
