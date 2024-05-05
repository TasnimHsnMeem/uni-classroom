import styled from "@emotion/styled";
import { Button, ButtonProps, Paper } from "@mui/material";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#DA3923",
    opacity: 0.8,
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "0 0 0 1.25rem",
  padding: "11px 28px",
  gap: "10px",
  width: "127px",
  height: "46px",
  background: "#DA3923",
  borderRadius: "4px",
}));

export const NavItem = styled(Paper)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "12px 24px",
  gap: "10px",
  height: "48px",

  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "20px",
  color: "#6D6E71",
  "&:hover": {
    color: "#DA3923",
    background: "#EAEAEA",
  },
}));
