import React from "react";
import styled from "styled-components";
import BubbleIcon from "../assets/BubbleIcon.png";

const BubbleContainer = styled.div`
  font-size: 10px;
  height: 0px;
  /* identical to box height */
  text-align: center;
  color: #fffdfd;
`;
const BubbleCircle = styled.img`
  position: relative;
  right: 1.2em;
  bottom: 0.4em;
`;

const BubbleText = styled.p`
  position: relative;
  right: 1.25em;
  bottom: 2.16em;
`;

function Bubble() {
  return (
    <BubbleContainer>
      <BubbleCircle src={BubbleIcon} />
      <BubbleText>5</BubbleText>
    </BubbleContainer>
  );
}

export default Bubble;
