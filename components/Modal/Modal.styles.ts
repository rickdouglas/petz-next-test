import styled from 'styled-components';


const ModalContainer = styled.div`
    flex-direction: column;
    padding: 1rem;
    position: fixed;
    width: 408px;
    height: 255px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    z-index: 9999;
    border-radius: 8px;
    border: 1px solid #DF8686;
`;
const ModalTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #1d1d1d;
    line-height: 24px;
    margin-bottom: 2rem;
    `
const ModalDiscrption = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #747474;
    line-height: 16px;
    align-self: center;
    `

export { ModalContainer, ModalTitle, ModalDiscrption };
