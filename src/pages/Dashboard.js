import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

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
      <Navbar />
    </DashboardDiv>
  );
}

export default Dashboard;
