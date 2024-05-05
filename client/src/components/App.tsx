import React from "react";
import Loading from "./common/Loading/Loading";

import Routing from "./common/Routing";
import ToastAlert from "./common/Toast/Toast";

const App: React.FC = () => {
  return (
    <>
      {/* <Loading /> */}
      <Routing />
      <ToastAlert />
    </>
  );
};

export default App;
