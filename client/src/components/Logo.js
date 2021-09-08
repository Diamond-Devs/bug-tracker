import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.webp";
import { CommonContainer } from "../styled/commonStyles";

const LogoImage = styled.img`
  object-fit: contain;
  width: 12.2vw;
  height: 10.3vh;
  margin-bottom: 0px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

function Logo({ height, width, mb }) {
  return (
    <CommonContainer mb={mb}>
      <LogoImage height={height} width={width} alt="Team Logo" src={logo} />
    </CommonContainer>
  );
}

export default Logo;
