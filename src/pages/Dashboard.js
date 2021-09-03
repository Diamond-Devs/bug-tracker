import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//Assets
import Hamburger from "../assets/HamburgerIcon.png";
import User from "../assets/UserIcon.png";
import Pencil from "../assets/PencilIcon.png";
import XButton from "../assets/XButton.png";
import Ticket from "../assets/TicketIcon.png";
import Project from "../assets/ProjectIcon.png";
import Logo from "../assets/Logo.png";
import Home from "../assets/HomeIcon.png";
import LogOut from "../assets/LogOutIcon.png";

import { CommonContainer, Text, mainWhite } from "../styled/commonStyles";

//Components
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Icon from "../components/Icon";
import Toggle from "../components/Toggle";
import SideMenu from "../components/SideMenu";
import Row from "../components/Row";
import TicketRow from "../components/TicketRow";

const TicketFeed = styled(CommonContainer)`
  @media (min-width: 550px) {
    margin-left: 4vw;
  }
  @media (min-width: 850px) {
    margin-top: 2vw;
    margin-left: 8vw;
  }
  @media (min-width: 1200px) {
    margin-top: 4vw;
    margin-left: 16vw;
  }
`;

const TicketFeedTitle = styled(Text)`
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

function Dashboard() {
  const history = useHistory();
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
      ox="hidden"
    >
      <Navbar
        area="nav"
        d="flex"
        jc="space-evenly"
        bs="0px 4px 4px rgba(0, 0, 0, 0.25);"
      >
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
        <SideMenu>
          <Row src={Home} text="Dashboard Home"></Row>
          <Row src={User} text="My Profile"></Row>
          <Row src={Ticket} text="My Tickets"></Row>
          <Row src={Project} text="My Projects"></Row>
          <Row src={Logo} text="Manage Users as Admin"></Row>
          <Row
            src={LogOut}
            text="Log Out"
            onClick={() => history.push("/")}
          ></Row>
        </SideMenu>
      )}
      <TicketFeed area="body" p="16px" pt="20px">
        <CommonContainer height="48px" d="flex" ai="center">
          <TicketFeedTitle fw="600" fs="16px">
            My Ticket Feed
          </TicketFeedTitle>
        </CommonContainer>
        <CommonContainer
          d="flex"
          height="auto"
          width="98.46%"
          fd="column"
          pb="64px"
        >
          <TicketRow />
          <TicketRow />
          <TicketRow />
          <TicketRow />
          <TicketRow />
          <TicketRow />
          <TicketRow />
        </CommonContainer>
      </TicketFeed>
    </CommonContainer>
  );
}

export default Dashboard;
