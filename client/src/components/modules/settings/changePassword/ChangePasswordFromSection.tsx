import { Box } from "@mui/material";

import ProfileInputElement from "../profileEdit/ProfileInputElement";

const ChangePasswordFromSection = () => {
  return (
    <Box>
      <ProfileInputElement
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
      />

      <ProfileInputElement
        name="newPassword"
        type="password"
        placeholder="New Password"
        label="New Password"
      />

      <ProfileInputElement
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        label="Confirm Password"
      />
    </Box>
  );
};

export default ChangePasswordFromSection;
