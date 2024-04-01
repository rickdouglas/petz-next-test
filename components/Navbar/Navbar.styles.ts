import styled from 'styled-components';


export const NavbarContainer = styled.header`
  display: flex;
  height: 90px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 10px;
  }
`;