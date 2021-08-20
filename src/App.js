import React from "react";
import Login from "./pages/Login";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";

const bottomMargin = "1.5em";
const dropShadow = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
const inputBorderRadius = "12px;";

const AppView = styled.div``;

function App() {
  return (
    <AppView>
      <Dashboard />
      {/* <Login
        addStyles={{ mb: bottomMargin, ds: dropShadow, br: inputBorderRadius }}
      /> */}
    </AppView>
  );
}

export default App;
