import React from "react";
import styled from "styled-components";

const MenuRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-left: ${({ ml }) => ml};
  margin-top: ${({ mt }) => mt};
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
