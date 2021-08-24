import styled, { css } from "styled-components";

export const CommonContainer = styled.div`
  display:${({ d }) => d}
  margin-bottom: ${({ mb }) => mb};
  filter: ${({ ds }) => ds};
  border-radius: ${({ br }) => br};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  display: flex;
  ${({ invert }) =>
    invert &&
    css`
      background: #454e9e;
      color: #fffdfd;
    `}
`;

export const mainColor = "#454E9E";
export const mainFont = "Gothic A1', sans-serif";
export const greenColor = "#00A321";
