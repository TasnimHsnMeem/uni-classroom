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
  admission: {
    create: {
      icon: Groups2,
      label: "Admission Request",
      route: RoutingList?.patientAdmission?.create,
    },
    nav: {
      icon: Groups2,
      label: "Admission Request",
      route: RoutingList?.patientAdmission?.index,
    },
  },
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
  district: {
    create: {
      icon: Map,
      label: "District",
      route: RoutingList?.district.index,
    },
    nav: {
      icon: Map,
      label: "District",
      route: RoutingList?.district.index,
    },
  },
  bedStatus: {
    nav: {
      icon: BedRounded,
      label: "Bed Status",
      route: RoutingList.bedStatus.index,
    },
  },
  disease: {
    nav: {
      icon: HealthAndSafety,
      label: "Treatment",
      route: RoutingList.disease.index,
    },
  },
  department: {
    nav: {
      icon: Hub,
      label: "Department",
      route: RoutingList.department.index,
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
