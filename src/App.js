import React from "react";
import LoginContainer from "./components/LoginContainer";
import styled from "styled-components";

const AppView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const bottomMargin = "1.5em";
const dropShadow = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
const inputBorderRadius = "12px;";

function App() {
  return (
    <AppView>
      <LoginContainer
        addStyles={{ mb: bottomMargin, ds: dropShadow, br: inputBorderRadius }}
      />
    </AppView>
  );
}

export default App;
