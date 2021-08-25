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
  const rowStyle = useDiamondStyles({
    height: 12.86,
    width: 100,
    mt: [[40], 0.005, 10],
  });
  const iconStyle = useDiamondStyles({
    ml: 6.28,
    fg: 1,
    d: "flex",
    height: [[40], 0.016, 10],
  });
  const textStyle = useDiamondStyles({
    ml: 3.68,
    size: [[5.44], 0.12, 4],
  });

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
            toggled={toggled}
            setToggled={setToggled}
            show={[Hamburger, "hamburger icon"]}
            hide={[XButton, "x button icon"]}
            // ml={3}
          />,
        ]}
      />
      {toggled && (
        <Screen area="body">
          <MenuRow {...rowStyle}>
            <Icon src={Home} alt="home icon" {...iconStyle}></Icon>
            <RegularText {...textStyle}>Dashboard Home</RegularText>
          </MenuRow>
          <MenuRow {...rowStyle}>
            <Icon src={User} alt="home icon" {...iconStyle}></Icon>
            <RegularText {...textStyle}>My Profile</RegularText>
          </MenuRow>
          <MenuRow {...rowStyle}>
            <Icon src={Home} alt="home icon" {...iconStyle}></Icon>
            <RegularText {...textStyle}>Dashboard Home</RegularText>
          </MenuRow>
          <MenuRow {...rowStyle}>
            <Icon src={Home} alt="home icon" {...iconStyle}></Icon>
            <RegularText {...textStyle}>Dashboard Home</RegularText>
          </MenuRow>
          <MenuRow {...rowStyle}>
            <Icon src={Home} alt="home icon" {...iconStyle}></Icon>
            <RegularText {...textStyle}>Dashboard Home</RegularText>
          </MenuRow>
        </Screen>
      )}
    </DashboardDiv>
  );
}

export default Dashboard;
