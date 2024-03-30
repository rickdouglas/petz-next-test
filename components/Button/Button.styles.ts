import styled, { css } from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonSpan = styled.span`
  padding-left: 1em;
`;

const Buttons = styled.button<{ $primary?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ $primary }) => ($primary ? "#000000" : "#ffffff")};
  background: ${({ $primary }) => ($primary ? "#ffffff" : "#E40F0F")};
  font-size: 1em;
  margin: 1em 1em 1em 0;
  padding: 0.25em 1em;
  border: ${({ $primary }) => ($primary ? "none" : "2px solid #E40F0F")};
  border-radius: 50px;
  cursor: pointer;
`;

export { Buttons, ButtonContainer, ButtonSpan };
