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
import Screen from "../components/Screen";
import MenuRow from "../components/MenuRow";
import RegularText from "../components/RegularText";

const DashboardDiv = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: yellow;
  justify-content: center;
  grid-template-areas:
    "nav nav nav nav nav"
    ". body body body .";
  grid-template-rows: 10vh auto;
`;

function Dashboard() {
  return (
    <DashboardDiv>
      <Navbar
        width={100}
        area={"nav"}
        icons={[
          <Icon src={Pencil} alt="pencil"></Icon>,
          <SearchBar mr={3} />,
          <Icon src={User} alt="user">
            <Bubble></Bubble>
          </Icon>,
          <ToggleMenu
            show={[Hamburger, "hamburger icon"]}
            hide={[XButton, "x button icon"]}
            // ml={3}
          />,
        ]}
      />
      <Screen area="body">
        <MenuRow ml={8} height={20} width={80}>
          <RegularText size={5}>dsadsaekwqpew</RegularText>
        </MenuRow>
        <MenuRow ml={12} height={70} width={75}>
          <Icon src={User}>
            <Bubble></Bubble>
          </Icon>
          <RegularText ml={5} size={3}>
            I went there and I ran away Help me!
          </RegularText>
        </MenuRow>
        <RegularText>weqw</RegularText>
      </Screen>
    </DashboardDiv>
  );
}

export default Dashboard;
