import React, { useState } from "react";
import styled from "styled-components";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";
import Ticket from "../assets/TicketIcon.png";
import Project from "../assets/ProjectIcon.png";

import Home from "../assets/HomeIcon.png";
import {
  CommonContainer,
  Input,
  Text,
  mainWhite,
} from "../styled/commonStyles";

//Components
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Icon from "../components/Icon";
import Toggle from "../components/Toggle";

function Dashboard() {
  const [toggled, setToggled] = useState(false);

  return (
    <CommonContainer
      d="grid"
      fd="column"
      height="100vh"
      bc={mainWhite}
      gta={`
      "nav"
      "body"
      `}
      gtr={`auto 100%`}
    >
      <Navbar area="nav" d="flex" jc="space-evenly">
        <Icon width="10vw" height="36px" src={Pencil}></Icon>
        <SearchBar />
        <Icon width="10vw" height="36px" src={User}></Icon>
        <Toggle
          show={<Icon width="10vw" height="36px" src={Hamburger} />}
          hide={<Icon width="10vw" height="36px" src={XButton} />}
          toggled={toggled}
          setToggled={setToggled}
        />
      </Navbar>
      {toggled && (
        <CommonContainer
          width="100vw"
          height="73px"
          area="body"
          d="flex"
          fd="column"
          mt="0.24vw"
        >
          <CommonContainer d="flex" fd="row" mt="5vw">
            <Icon ml="8vw" width="10vw" mw={"36px"} height="36px" src={Home} />
            <CommonContainer ml={"13px"} d="flex" ai="center">
              <Text>Dashboard Home</Text>
            </CommonContainer>
          </CommonContainer>
          <CommonContainer d="flex" fd="row" mt="5vw">
            <Icon ml="8vw" width="10vw" mw={"36px"} height="36px" src={User} />
            <CommonContainer ml={"13px"} d="flex" ai="center">
              <Text>My Profile</Text>
            </CommonContainer>
          </CommonContainer>
          <CommonContainer d="flex" fd="row" mt="5vw">
            <Icon
              ml="8vw"
              width="10vw"
              mw={"36px"}
              height="36px"
              src={Ticket}
            />
            <CommonContainer ml={"13px"} d="flex" ai="center">
              <Text>My Tickets</Text>
            </CommonContainer>
          </CommonContainer>
          <CommonContainer d="flex" fd="row" mt="5vw">
            <Icon
              ml="8vw"
              width="10vw"
              mw={"36px"}
              height="36px"
              src={Project}
            />
            <CommonContainer ml={"13px"} d="flex" ai="center">
              <Text>My Projects</Text>
            </CommonContainer>
          </CommonContainer>
          <CommonContainer d="flex" fd="row" mt="5vw">
            <Icon ml="8vw" width="10vw" mw={"36px"} height="36px" src={User} />
            <CommonContainer ml={"13px"} d="flex" ai="center">
              <Text>Manage Users as Admin</Text>
            </CommonContainer>
          </CommonContainer>
        </CommonContainer>
      )}
      {/* <CommonContainer area="body" bc="pink">
        ddsads
      </CommonContainer> */}
    </CommonContainer>
  );
}

export default Dashboard;
