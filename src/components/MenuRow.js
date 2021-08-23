import React from "react";
import styled from "styled-components";

const MenuRowContainer = styled.div`
  display: flex;
  align-items: center;

  flex-direction: ${({ vertical }) => vertical && "column"};
  background-color: red;
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
  margin-left: ${({ ml }) => ml}%;
`;

function MenuRow({ height, width, ml, children, vertical }) {
  return (
    <MenuRowContainer height={height} width={width} ml={ml} vertical={vertical}>
      {children}
    </MenuRowContainer>
  );
}
// You can use ml to adjust the centering;

export default MenuRow;
