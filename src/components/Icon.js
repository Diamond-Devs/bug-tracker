import React from "react";
import styled from "styled-components";
import { generateResponsiveness } from "../js/generateResponsiveness";

const IconDiv = styled.div`
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  margin-top: ${({ mt }) => mt};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-grow: ${({ fg }) => fg};
  display: ${({ d }) => d};
  height: ${({ height }) => generateResponsiveness(height, "height", 100, 700)};
  margin-top: ${({ mt }) => generateResponsiveness(mt, "margin-top", 200, 700)};
`;

const IconImg = styled.img`
  object-fit: contain;
  height: ${({ height }) => generateResponsiveness(height, "height", 100, 700)};
  width: ${({ width }) => width};
  flex-grow: ${({ fg }) => fg};
`;

function Icon({ src, alt, mr, ml, mt, children, height, width }) {
  return (
    <IconDiv mr={mr} ml={ml} height={height} width={width} mt={mt}>
      {children}
      <IconImg src={src} alt={alt} height={height} width={width} mt={mt} />
    </IconDiv>
  );
}

export default Icon;
