const sx = {
  appBar: { background: "#ffffff", zIndex: 1250, boxShadow: "0 .0625rem 0 #F0F0F0" },
  img: { height: "50px", padding: "5px", cursor: "pointer" },
  abIcon: { display: { xs: "flex", md: "none" }, mr: 1 },
  h5: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    },
  box: { display: 'flex', alignItems: 'center', flexGrow: 0 },
  boxEmpty: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  h6: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    textDecoration: "none",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D6E71",
  },
  menu: { mt: "45px" },
  toolBar: {minHeight: '4rem'}
};

export default sx;
