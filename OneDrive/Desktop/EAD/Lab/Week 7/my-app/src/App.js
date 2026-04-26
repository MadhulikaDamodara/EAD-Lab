import React from "react";

import Timer from "./components/Timer";
import StateProps from "./components/StateProps";
import ControlledForm from "./components/ControlledForm";
import RoutingExample from "./components/RoutingExample";
import PaginationTable from "./components/PaginationTable";
import PasswordStrength from "./components/PasswordStrength";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Damodara Lakshmi Madhulika</h2>
      <h2>160124737144</h2>
      
      {/* Run ONE at a time */}

      {/*<Timer />*/}
      {/* <StateProps /> */}
      {/* <ControlledForm /> */}
      {/* <RoutingExample /> */}
      {/* <PaginationTable /> */}
       <PasswordStrength /> 

    </div>
  );
}

export default App;