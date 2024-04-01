import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 165px;
    background:#E40F0F;
    padding: 24px;
    @media (max-width: 768px) {
    height: 130px;
    padding: 1rem;
  }
`;

const HeaderTitle = styled.h2`
    font-size: 32px;
    color: #ffffff;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HeaderDescription = styled.p`
    font-size: 14px;
    color: #ffffff;
`;

const HeaderNavs = styled.h3`
    font-size: 12px;
    color: #ffffff;
    padding-bottom: 1rem;
`;

export { HeaderContainer, HeaderTitle, HeaderDescription, HeaderNavs };
