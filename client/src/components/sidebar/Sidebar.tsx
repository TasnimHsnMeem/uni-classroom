import MENU from "../../constants/menu";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import SideBarNewButton from "./SideBarNewButton";
import { setToggleMenuAction } from "../../redux/utils/actions";
import { useResponsive } from "../../helpers/customHooks/useResponsive";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./styles.module.scss";

export interface IBtnNavItem {
  icon: any;
  label: string;
  route: string;
}

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const toggleMenu = useAppSelector((state) => state.utils.toggleMenu);
  const [btnNavMenus, setBtnNavMenus] = useState<IBtnNavItem[] | []>([]);
  const [navMenus, setNavMenus] = useState<IBtnNavItem[]>([]);

  const { role } = useSelector(
    (state: RootState) => state?.auth?.profileData?.user,
    shallowEqual
  );
  const [isMobile] = useResponsive();

  useEffect(() => {
    setNavMenus(MENU?.nav?.[role]);
    setBtnNavMenus(MENU?.create?.[role]);
  }, [role]);

  const closeMenu = () => {
    if (!isMobile) return;
    dispatch(setToggleMenuAction(!toggleMenu));
  };

  return (
    <>
      {(toggleMenu || !isMobile) && (
        <nav className={styles.sideBar}>
          <div className={styles.container}>
            <SideBarNewButton btnNavMenus={btnNavMenus} />
            <ul className={styles.sideBarMenu}>
              {navMenus?.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={styles.menuLink}
                    key={index}
                    to={item?.route}
                    onClick={closeMenu}
                  >
                    <span className={styles.menuIcon}>
                      <item.icon />
                    </span>
                    <span>{item?.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
