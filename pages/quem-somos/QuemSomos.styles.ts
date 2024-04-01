import styled from 'styled-components';

const QuemSomosContainer = styled.main`
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 40%;
    margin: 0 auto;
    @media (max-width: 768px) {
    width: 95%;
  }`

const QuemSomosTitle = styled.h3`
    font-size: 20px;
    color: #000000;
    margin-top: 2rem;
`
const DescriptionTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin-top: 1.5rem;
`
const Description = styled.p`
    font-size: 14px;
    color: #000000;
    margin-top: 1.5rem;
`

export { QuemSomosContainer, QuemSomosTitle, DescriptionTitle, Description };