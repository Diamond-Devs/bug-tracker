import styled, { css } from "styled-components";

export const mainColor = "#454E9E";
export const mainWhite = "#fffdfd";
export const mainFont = "Gothic A1', sans-serif";
export const greenColor = "#00A321";

export const CommonContainer = styled.div`
  display: ${({ d }) => d};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  grid-area: ${({ area }) => area};
  grid-template-areas: ${({ gta }) => gta};
  grid-template-rows: ${({ gtr }) => gtr};
  top: ${({ t }) => t};
  background-color: ${({ bc }) => bc};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  filter: ${({ ds }) => ds};
  border: ${({ b }) => b};
  border-radius: ${({ br }) => br};
  box-shadow: ${({ bs }) => bs};
  width: ${({ width }) => width};
  max-width: ${({ mw }) => mw};
  height: ${({ height }) => height};
  max-height: ${({ mh }) => mh};
  z-index: ${({ z }) => z};
  overflow-x: ${({ ox }) => ox};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};

  ${({ invert }) =>
    invert &&
    css`
      background: #454e9e;
      color: #fffdfd;
    `}
`;

export const Image = styled.img`
  object-fit: contain;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ mw }) => mw};
`;

export const Input = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ mw }) => mw};
  padding: ${({ pd }) => pd};
  outline: none;
  border: none;
  color: ${mainColor};
  color: ${({ color }) => color};
`;

export const Text = styled.p`
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
`;
