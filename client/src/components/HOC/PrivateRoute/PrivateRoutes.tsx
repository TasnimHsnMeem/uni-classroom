import { shallowEqual, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Layout from "../../common/layouts/Layout";

import { RootState } from "../../../redux/store";

interface Props {
  allowedRoles: string[];
}

const PrivateRoutes: React.FC<Props> = ({ allowedRoles }) => {
  const location = useLocation();

  const {
    isAuth,
    user: { role },
  } = useSelector((state: RootState) => {
    return state.auth.profileData;
  }, shallowEqual);

  return (
    <Layout>
      {allowedRoles.includes(role) ? (
        <Outlet />
      ) : isAuth ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </Layout>
  );
};

export default PrivateRoutes;
