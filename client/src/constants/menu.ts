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
    join: {
      icon: Class,
      label: "Join Course",
      route: RoutingList?.course?.join,
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
  chat: {
    nav: {
      icon: Groups2,
      label: "Chat",
      route: RoutingList.chat.index,
    },
  },
  adminNotice: {
    nav: {
      icon: HealthAndSafety,
      label: "Admin Notice",
      route: RoutingList.adminNotice.index,
    },
    create: {
      icon: FmdGood,
      label: "Admin Notice",
      route: RoutingList.adminNotice.create,
    }
  },
};

const MENU = {
  nav: {
    [userRoles.TEACHER]: [
      allMenus.adminNotice.nav,
      allMenus.course.nav,
      allMenus.chat.nav,
      // allMenus?.setting?.nav
    ],
    [userRoles.STUDENT]: [
      allMenus.adminNotice.nav,
      allMenus.course.nav,
      allMenus.chat.nav,
      // allMenus?.setting?.nav
    ],
    [userRoles.ADMIN]: [
      allMenus.adminNotice.nav,
      allMenus?.user?.nav, 
      allMenus.chat.nav,
      allMenus.course.nav,
      // allMenus?.setting?.nav
    ],
  },
  create: {
    [userRoles.TEACHER]: [
      allMenus?.course?.create,
    ],
    [userRoles.STUDENT]: [
      allMenus?.course?.join
    ],
    [userRoles.ADMIN]: [
      allMenus.adminNotice.create,
      allMenus?.user?.create, 
      // allMenus?.setting?.nav
    ],
  },
};

export default MENU;
