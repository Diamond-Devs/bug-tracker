import React, { useState } from "react";
import Icon from "./Icon";
import styled from "styled-components";

const ToggleMenuDiv = styled.div`
  margin-right: ${({ mr }) => mr}vw;
  margin-left: ${({ ml }) => ml}vw;
  @media (min-width: 609px) {
    margin-left: ${({ ml }) => ml * 0.5}vh;
    margin-right: ${({ mr }) => mr * 0.5}vh;
  }
`;

function ToggleMenu({ hide, show, mr }) {
  const [toggled, setToggled] = useState(false);
  return (
    <ToggleMenuDiv onClick={() => setToggled(!toggled)} mr={mr}>
      {toggled ? (
        <Icon src={hide[0]} alt={hide[1]} />
      ) : (
        <Icon src={show[0]} alt={show[1]} />
      )}
    </ToggleMenuDiv>
  );
}

export default ToggleMenu;
