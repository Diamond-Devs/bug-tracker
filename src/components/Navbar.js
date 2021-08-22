import React from "react";
import styled from "styled-components";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";

//Components
import Icon from "./Icon";
import SearchBar from "./SearchBar";
import Bubble from "./Bubble";
import ToggleMenu from "./ToggleMenu";

const NavbarDiv = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  background: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 9.4vh;
  justify-content: space-around;
`;

function Navbar({ menu, toggleMenu }) {
  return (
    <NavbarDiv>
      <SearchBar />
      <Icon src={Pencil} alt="pencil" />
      <Icon src={User} alt="user">
        <Bubble></Bubble>
      </Icon>
      <ToggleMenu
        show={[Hamburger, "hamburger icon"]}
        hide={[XButton, "x button icon"]}
      />
    </NavbarDiv>
  );
}

export default Navbar;
