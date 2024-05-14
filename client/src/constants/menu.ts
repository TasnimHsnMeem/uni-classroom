import {
  BedRounded,
  Class,
  FmdGood,
  Groups2,
  HealthAndSafety,
  Hub,
  Map,
  PeopleRounded,
  SettingsRounded,
} from "@mui/icons-material";

import { userRoles } from "./user";
import RoutingList from "../utils/RoutingList";

const allMenus = {
  course: {
    create: {
      icon: Class,
      label: "Course",
      route: RoutingList?.course?.create,
    },
    nav: {
      icon: Class,
      label: "Course",
      route: RoutingList?.course?.index,
    },
  },
  user: {
    create: {
      icon: PeopleRounded,
      label: "User",
      route: RoutingList?.user?.create,
    },
    nav: {
      icon: PeopleRounded,
      label: "User",
      route: RoutingList?.user?.index,
    },
  },
  setting: {
    nav: {
      icon: SettingsRounded,
      label: "Settings",
      route: RoutingList.settings.index,
    },
  },
};

const MENU = {
  nav: {
    [userRoles.TEACHER]: [
      allMenus.course.nav
      // allMenus?.setting?.nav
    ],
    [userRoles.STUDENT]: [
      allMenus.course.nav
      // allMenus?.setting?.nav
    ],
    [userRoles.ADMIN]: [allMenus?.user?.nav, 
      // allMenus?.setting?.nav
    ],
  },
  create: {
    [userRoles.TEACHER]: [
      allMenus?.course?.create,
    ],
    [userRoles.STUDENT]: [],
    [userRoles.ADMIN]: [allMenus?.user?.create, 
      // allMenus?.setting?.nav
    ],
  },
};

export default MENU;
