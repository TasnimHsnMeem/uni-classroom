import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoutes from "../HOC/PrivateRoute/PrivateRoutes";
import Home from "../modules/home/Home";
import Login from "../modules/login/login";
import PageNotFound from "../modules/pageNotFound/PageNotFound";
// import AddPatient from "../modules/patient/AddPatient";
import NonLoginRoutes from "../HOC/PrivateRoute/NonLoginRoutes";

import { permissions } from "../../constants/permissions";
import RoutingList from "../../utils/RoutingList";
import UserList from "../modules/user/userList/UserList";
import AddUser from "../modules/user/addUser/AddUser";
import CourseList from "../modules/course/courseList/CourseList";
import AddCourse from "../modules/course/addCourse/AddCourse";
import CourseDetails from "../modules/course/courseDetails/CourseDetails";

const Routing = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route element={<NonLoginRoutes />}>
            <Route path={RoutingList.login.index} element={<Login />} />
          </Route>

          <Route
            element={
              <PrivateRoutes allowedRoles={permissions?.[RoutingList?.index]} />
            }
          >
            <Route path={RoutingList.index} element={<Home />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.index]}
              />
            }
          >
            <Route path={RoutingList.user.index} element={<UserList />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.create]}
              />
            }
          >
            <Route path={RoutingList.user.create} element={<AddUser />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.edit]}
              />
            }
          >
            <Route path={`${RoutingList.user.edit}/:id`} element={<AddUser />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.course?.index]}
              />
            }
          >
            <Route path={RoutingList.course.index} element={<CourseList />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.course?.index]}
              />
            }
          >
            <Route path={`${RoutingList.course.index}/:id`} element={<CourseDetails />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.course?.create]}
              />
            }
          >
            <Route path={RoutingList.course.create} element={<AddCourse />} />
          </Route>

          <Route path={RoutingList.page_not_found} element={<PageNotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Routing;
