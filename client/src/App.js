import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";

const bottomMargin = "1.5em";
const dropShadow = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
const inputBorderRadius = "12px";

const AppView = styled.div``;

function App() {
  return (
    <AppView>
      <Router>
        <Route exact path="/">
          <Login
            addStyles={{
              mb: bottomMargin,
              ds: dropShadow,
              br: inputBorderRadius,
            }}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Router>
    </AppView>
  );
}

export default App;
