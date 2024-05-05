import { Navigate, useLocation } from "react-router-dom";
import RoutingList from "../../../utils/RoutingList";

const Home = () => {
  const location = useLocation();

  return (
    // <Navigate
    //   to={RoutingList.patientAdmission.index}
    //   state={{ from: location }}
    //   replace
    // />
    <div>
      Logged In as user
    </div>
  );
};

export default Home;
