import styled from 'styled-components';

// Define your styled components here
const HeaderContainer = styled.div`
    width: 100%;
    height: 187px;
    background:#E40F0F;
    padding: 24px;
    // CSS styles for the header container
`;

const HeaderTitle = styled.h2`
    font-size: 32px;
    color: #ffffff;
    padding-bottom: 1rem;

    /* text-align: center; */
    /* padding-top: 80px; */
    // CSS styles for the header title
`;
const HeaderDescription = styled.p`
    font-size: 14px;
    color: #ffffff;
`
const HeaderNavs = styled.h3`
    font-size: 12px;
    color: #ffffff;
    padding-bottom: 1rem;
`

// Export your styled components
export { HeaderContainer, HeaderTitle, HeaderDescription, HeaderNavs };