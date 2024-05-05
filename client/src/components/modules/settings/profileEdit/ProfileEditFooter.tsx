import { Box, Container } from "@mui/material";
import React from "react";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const ProfileEditFooter = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box className="form-footer">
      <Container maxWidth={false}>
        <Box className="d-flex align-items-center justify-content-between form-footer-box">
          <Button color="default" type="button" onClick={()=>navigate(-1)}>
            Back
          </Button>
          <Box className="d-flex align-items-center">
            <Button type="button" className="mg-r-10" onClick={()=>navigate(-1)}>
              Cancel
            </Button>
            <Button color="alert" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileEditFooter;
