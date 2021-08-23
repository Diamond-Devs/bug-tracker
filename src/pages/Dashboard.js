import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useDiamondStyles } from "../hooks/useDiamondStyles";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";
import Home from "../assets/HomeIcon.png";

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

  justify-content: center;
  grid-template-areas:
    "nav"
    "body";
  grid-template-rows: 10vh auto;
`;

const MenuRowIcon = styled.img`
  margin-left: 6.28vw;
  @media (min-width: 427px) {
    width: 44px;
    height: 44px;
  }
  @media (min-width: 579px) {
    width: 52px;
    height: 52px;
  }
  @media (min-width: 807px) {
    width: 56px;
    height: 56px;
  }
  @media (min-width: 962px) {
    width: 64px;
    height: 64px;
  }
  @media (min-width: 1100px) {
    width: 104px;
    height: 104px;
  }
`;

function Dashboard() {
  return (
    <DashboardDiv>
      <Navbar
        {...useDiamondStyles({ width: 100 })}
        area={"nav"}
        icons={[
          <Icon src={Pencil} alt="pencil icon"></Icon>,
          <SearchBar {...useDiamondStyles({ mr: 3, ml: 3 })} />,
          <Icon src={User} alt="user icon">
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
        <MenuRow
          {...useDiamondStyles({ height: 12.86, width: 100, mt: "10px" })}
        >
          <MenuRowIcon
            src={Home}
            alt="home icon"
            {...useDiamondStyles({ ml: 6.28 })}
          ></MenuRowIcon>
          <RegularText {...useDiamondStyles({ ml: 3.68, size: 4.44 })}>
            Dashboard Home
          </RegularText>
        </MenuRow>
        <MenuRow
          {...useDiamondStyles({ height: 12.86, width: 100, mt: "8px" })}
        >
          <MenuRowIcon
            src={Home}
            alt="home icon"
            {...useDiamondStyles({ ml: 6.28 })}
          ></MenuRowIcon>
          <RegularText {...useDiamondStyles({ ml: 3.68, size: 4.44 })}>
            Dashboard Home
          </RegularText>
        </MenuRow>
      </Screen>
    </DashboardDiv>
  );
}

export default Dashboard;
