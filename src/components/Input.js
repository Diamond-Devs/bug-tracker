import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fffdfd;
  border: 1px solid #454e9e;
  box-sizing: border-box;
  border-radius: 20px;

  align-items: center;
  gap: 3vw;
  margin-left: ${({ ml }) => ml}vw;
`;

function Input({ children, ml }) {
  return <InputDiv ml={ml}>{children}</InputDiv>;
}

export default Input;
