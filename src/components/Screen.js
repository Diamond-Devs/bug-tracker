import React from "react";
import styled from "styled-components";
const ScreenDiv = styled.div`
  grid-area: body;
`;

function Screen({ children }) {
  return <ScreenDiv>{children}</ScreenDiv>;
}

export default Screen;
