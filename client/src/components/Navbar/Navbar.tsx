import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import * as authService from "../../services/auth";
import RoutingList from "../../utils/RoutingList";
import { setToggleMenuAction } from "../../redux/utils/actions";
import { setAuthStateEmptyAction } from "../../redux/auth/action";
import { useResponsive } from "../../helpers/customHooks/useResponsive";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import IMAGES from "../../assets/themes/images/images";
import sx from "./styles";

type NavbarProps = { isLogoOnly?: boolean };

const Navbar: FC<NavbarProps> = (props) => {
  const { isLogoOnly } = props;
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [isMobile] = useResponsive();
  const toggleMenu = useAppSelector((state) => state.utils.toggleMenu);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  let navigate = useNavigate();

  const menus = [{ label: "Logout", route: RoutingList.index }];

  const handleCloseUserMenu =
    (selectedMenu: { label: string; route: string }) => () => {
      setAnchorElUser(null);
      if (selectedMenu?.label === "Logout") {
        authService.logout();
        dispatch(setAuthStateEmptyAction());
      }
    };

  const { user } = useSelector(
    (state: RootState) => state?.auth?.profileData,
    shallowEqual
  );

  return (
    <AppBar position="fixed" sx={sx.appBar} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={sx.toolBar} disableGutters>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="error"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => dispatch(setToggleMenuAction(!toggleMenu))}
            >
              <MenuIcon />
            </IconButton>
          )}

          <img
            src={IMAGES.Logo}
            alt=""
            style={sx.img}
            onClick={() => {
              navigate(RoutingList.index);
            }}
          />
          {!isLogoOnly && (
            <>
              <AdbIcon sx={sx.abIcon} />
              <Typography variant="h5" noWrap component="a" href="" sx={sx.h5}>
                LOGO
              </Typography>
              <Box sx={sx.boxEmpty}></Box>
              <Box sx={sx.box}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={sx.h6}
                >
                  {user.name.firstName + " " + user.name.lastName}
                </Typography>
                <Tooltip title="">
                  <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                    <Avatar
                      alt={"User Image"}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={sx.menu}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu({ label: "", route: "" })}
                >
                  {menus.map((menu) => (
                    <MenuItem
                      key={menu?.label}
                      onClick={handleCloseUserMenu(menu)}
                    >
                      <Typography textAlign="center">{menu?.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
