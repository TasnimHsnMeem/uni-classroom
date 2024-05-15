import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import * as authService from "./../../../services/auth";

import { setAuthStateEmptyAction } from "../../../redux/auth/action";
import { useAppDispatch } from "../../../redux/store";

const NonLoginRoutes: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
