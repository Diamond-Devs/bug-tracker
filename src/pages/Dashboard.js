import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";

//Components
import Icon from "../components/Icon";
import SearchBar from "../components/SearchBar";
import Bubble from "../components/Bubble";
import ToggleMenu from "../components/ToggleMenu";

const DashboardDiv = styled.div`
  display: grid;
  width: 100vw;
  grid-template-areas:
    "nav nav nav"
    "body body body"
    "body body body";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
`;

function Dashboard() {
  return (
    <DashboardDiv>
      <Navbar
        icons={[
          <SearchBar ml={3} />,
          <Icon src={Pencil} alt="pencil" />,
          <Icon src={User} alt="user">
            <Bubble></Bubble>
          </Icon>,
          <ToggleMenu
            show={[Hamburger, "hamburger icon"]}
            hide={[XButton, "x button icon"]}
            mr={3}
          />,
        ]}
      />
    </DashboardDiv>
  );
}

export default Dashboard;
