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
  [RoutingList?.course?.index]: [userRoles.TEACHER],
  [RoutingList?.course?.create]: [userRoles.TEACHER],
};
