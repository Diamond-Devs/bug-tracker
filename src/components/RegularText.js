import React from "react";
import styled, { css } from "styled-components";
import { CommonContainer } from "../styled/commonStyles";

const RegularTextContent = styled.p`
  text-align: center;
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  font-size: ${({ size }) => size};
  filter: ${({ ds }) => ds};
  ${({ ts }) =>
    ts &&
    css`
      text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    `};

  ${({ size }) =>
    css`
      font-size: ${size[1]};
    `}
`;

function RegularText({ size, children, mb, ds, ts, ml }) {
  return (
    <CommonContainer ds={ds} mb={mb}>
      <RegularTextContent size={size} mb={mb} ds={ds} ts={ts} ml={ml}>
        {children}
      </RegularTextContent>
    </CommonContainer>
  );
}

export default RegularText;
