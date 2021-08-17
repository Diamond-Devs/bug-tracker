import React from "react";
import styled, { css } from "styled-components";
import { CommonContainer } from "../styled/commonStyles";

const RegularTextContent = styled.p`
  text-align: center;
  margin-bottom: ${({ mb }) => mb};
  font-size: ${({ size }) => size}em;
  filter: ${({ ds }) => ds};
  ${({ ts }) =>
    ts &&
    css`
      text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    `}
`;

function RegularText({ size, children, mb, ds, ts }) {
  return (
    <CommonContainer ds={ds}>
      <RegularTextContent size={size} mb={mb} ds={ds} ts={ts}>
        {children}
      </RegularTextContent>
    </CommonContainer>
  );
}

export default RegularText;
