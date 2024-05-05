import {
  AddCircleRounded
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Popover } from "@mui/material";

import { IBtnNavItem } from "./Sidebar";
import {setToggleMenuAction} from "../../redux/utils/actions";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useResponsive} from "../../helpers/customHooks/useResponsive";
import styles from "./styles.module.scss";
import { ColorButton } from "./sx.styles";

type Props = {
  btnNavMenus: IBtnNavItem[];
};

const SideBarNewButton = ({ btnNavMenus }: Props) => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toggleMenu = useAppSelector((state) => state.utils.toggleMenu);
  const [isMobile] = useResponsive();
  const [poppedUpMenu, setPoppedUpMenu] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleNavigate = (route: string) => () => {
    navigate(route);
    setPoppedUpMenu(null);
    closeMenu();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPoppedUpMenu(event.currentTarget);
  };

  const handleClose = () => {
    setPoppedUpMenu(null);
  };

  const closeMenu = () => {
    if(!isMobile) return;
    dispatch(setToggleMenuAction(!toggleMenu));
  };

  const open = Boolean(poppedUpMenu);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {btnNavMenus.length > 0 && (
        <>
          <ColorButton variant="contained" onClick={handleClick}>
            <AddCircleRounded />
            <h5 className={styles.h5}>New</h5>
          </ColorButton>
          <Popover
            id={id}
            open={open}
            anchorEl={poppedUpMenu}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Paper className={styles.btnNavMenus}>
              {btnNavMenus.map((item, index) => (
                <Paper
                  elevation={0}
                  className={styles.navItem}
                  key={item?.label}
                  onClick={handleNavigate(item?.route)}
                >
                  <item.icon />
                  <p className={styles.navText}>{item?.label}</p>
                </Paper>
              ))}
            </Paper>
          </Popover>
        </>
      )}
    </div>
  );
};

export default SideBarNewButton;
