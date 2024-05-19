import { userRoles } from "./user";

import RoutingList from "../utils/RoutingList";

export const permissions = {
  // Home
  [RoutingList.index]: [
    userRoles.ADMIN,
    userRoles.STUDENT,
    userRoles.TEACHER,
  ],
  [RoutingList?.user?.index]: [userRoles.ADMIN],
  [RoutingList?.user?.create]: [userRoles.ADMIN],
  [RoutingList?.user?.edit]: [userRoles.ADMIN],
  [RoutingList?.course?.index]: [userRoles.TEACHER, userRoles.STUDENT, userRoles.ADMIN],
  [RoutingList?.course?.create]: [userRoles.TEACHER],
  [RoutingList?.course?.edit]: [userRoles.TEACHER],
  [RoutingList?.course?.join]: [userRoles.STUDENT],
  [RoutingList?.adminNotice?.index]: [userRoles.ADMIN, userRoles.TEACHER, userRoles.STUDENT],
};
