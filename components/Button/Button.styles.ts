import styled, { css } from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonSpan = styled.span`
  padding-left: 1em;
`;

const Buttons = styled.button<{ $primary?: boolean, $secondary?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ $secondary }) => ($secondary ? "280px" : "")};
  color: ${({ $primary }) => ($primary ? "#000000" : "#ffffff")};
  color: ${({ $secondary }) => ($secondary ? "#1d1d1d" : "")};
  background: ${({ $primary }) => ($primary ? "#ffffff" : "#E40F0F")};
  background: ${({ $secondary }) => ($secondary ? "#ffffff" : "")};
  font-size: 1em;
  font-size: ${({ $secondary }) => ($secondary ? "12px" : "")};
  font-weight: ${({ $secondary }) => ($secondary ? "700" : "normal")};
  margin: 1em 1em 1em 0;
  margin-left: ${({ $secondary }) => ($secondary ? "3rem" : "")};
  padding: 0.25em 1em;
  padding: ${({ $secondary }) => ($secondary ? "0.5rem" : "")};
  border: ${({ $primary }) => ($primary ? "none" : "2px solid #E40F0F")};
  border: ${({ $secondary }) => ($secondary ? "1px solid #1d1d1d" : "none")};
  border-radius: 50px;
  cursor: pointer;
`;


export { Buttons, ButtonContainer, ButtonSpan };
