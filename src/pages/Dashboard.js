import React, { useState } from "react";
import styled from "styled-components";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";
import Home from "../assets/HomeIcon.png";
import { CommonContainer } from "../styled/commonStyles";
import { Image } from "../styled/commonStyles";

//Components
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";

const DashboardDiv = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  grid-template-areas:
    "nav"
    "body";
  grid-template-rows: 10vh auto;
`;

// const MenuRowIcon = styled.img`
//   margin-left: 6.28vw;
//   @media (min-width: 427px) {
//     width: 44px;
//     height: 44px;
//   }
//   @media (min-width: 579px) {
//     width: 52px;
//     height: 52px;
//   }
//   @media (min-width: 807px) {
//     width: 56px;
//     height: 56px;
//   }
//   @media (min-width: 962px) {
//     width: 64px;
//     height: 64px;
//   }
//   @media (min-width: 1100px) {
//     display: none;
//   }
// `;

function Dashboard() {
  const [toggled, setToggled] = useState(false);

  return (
    <CommonContainer
      d="grid"
      bc="yellow"
      width="100vw"
      height="100vh"
      gta={"nav" + "body"}
    >
      <Navbar area="nav" d="flex" jc="space-evenly">
        <Icon width="40px" height="40px" src={Pencil}></Icon>
        <Icon width="40px" height="40px" src={Pencil}></Icon>
      </Navbar>
    </CommonContainer>
  );
}

export default Dashboard;
