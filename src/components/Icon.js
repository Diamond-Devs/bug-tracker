import React from "react";
import styled from "styled-components";

const IconDiv = styled.div`
  margin-right: ${({ mr }) => mr}vw;
  margin-left: ${({ ml }) => ml}vw;
  @media (min-width: 609px) {
    margin-left: ${({ ml }) => ml * 0.5}vh;
    margin-right: ${({ mr }) => mr * 0.5}vh;
  }
`;

function Icon({ src, alt, mr, ml, children }) {
  return (
    <IconDiv mr={mr} ml={ml}>
      {children}
      <img src={src} alt={alt} />
    </IconDiv>
  );
}

export default Icon;
