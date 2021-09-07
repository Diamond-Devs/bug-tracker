import React from "react";
import { CommonContainer, mainColor } from "../styled/commonStyles";
import styled from "styled-components";
import RegularText from "./RegularText";

const DiamondButton = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  width: 38.4vh;
  height: 55px;
  height: 8vh;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 24px;
  border: solid ${mainColor} 1px;
  :hover {
    background: black; //make this darker purple
    color: white;
    cursor: pointer;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

function Button({ ds, mb, height, width, children, invert, onClick }) {
  return (
    <DiamondButton
      ds={ds}
      mb={mb}
      height={height}
      width={width}
      invert={invert}
      onClick={onClick}
    >
      <RegularText>{children}</RegularText>
    </DiamondButton>
  );
}

export default Button;
