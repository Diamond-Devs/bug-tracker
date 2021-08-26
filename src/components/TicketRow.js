import React from "react";
import styled from "styled-components";
import { CommonContainer, Text } from "../styled/commonStyles";
import Icon from "./Icon";
import Ticket from "../assets/TicketIcon.png";

const TicketFeedText = styled(Text)`
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

function TicketRow() {
  return (
    <CommonContainer mt="12px" d="flex" fd="row" width="100%">
      <Icon ml="14px" mt="24px" width="30px" src={Ticket} />
      <CommonContainer ml="32px" mt="32px" mb="32px">
        <TicketFeedText fs="16px">Ticket:</TicketFeedText>
        <TicketFeedText fs="16px">Project:</TicketFeedText>
        <TicketFeedText fs="16px" fw="700">
          Updated:
        </TicketFeedText>
      </CommonContainer>
    </CommonContainer>
  );
}

export default TicketRow;
