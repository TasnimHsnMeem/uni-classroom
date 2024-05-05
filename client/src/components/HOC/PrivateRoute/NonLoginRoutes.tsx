import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import * as authService from "./../../../services/auth";

import { setAuthStateEmptyAction } from "../../../redux/auth/action";
import { useAppDispatch } from "../../../redux/store";

const NonLoginRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    authService.logout();
    dispatch(setAuthStateEmptyAction());
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default NonLoginRoutes;
