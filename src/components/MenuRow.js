import React from "react";
import styled from "styled-components";
import { generateResponsiveness } from "../js/generateResponsiveness";

const MenuRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-left: ${({ ml }) => ml};
  margin-top: ${({ mt }) => mt};
  margin-top: ${({ mt }) => generateResponsiveness(mt, "margin-top", 100, 300)};
`;

function MenuRow({ height, width, ml, mt, children }) {
  return (
    <MenuRowContainer height={height} width={width} ml={ml} mt={mt}>
      {children}
    </MenuRowContainer>
  );
}
// You can use ml to adjust the centering;

export default MenuRow;
