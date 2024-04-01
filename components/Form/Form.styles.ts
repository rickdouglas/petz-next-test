import styled from 'styled-components';

const FormContainer = styled.form`
    /* width: auto; */
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    
`

const FormTitle = styled.h2`
    font-size: 24px;
    color: #1d1d1d;
    margin-top: 1.5rem;
`

const FormRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Alinha os itens ao topo */
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
`;
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormLabel = styled.label`
    padding-bottom: 1rem;
    font-weight: 700;
    line-height: 14px;
    display: block; /* Add this line */
    font-size: 12px;
    color: #1d1d1d;
    margin-top: 1rem;
    display: block; /* Add this line */
`

const FormInput = styled.input`
    width: 265px;
    padding: 8px;
    color: #747474;
    height: 45px;
    top: 407px;
    left: 475px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    border: 1px solid #D5D5D5

`

const FormSelect = styled.select`
    width: 265px;
    padding: 8px;
    height: 45px;
    color: #747474;
    top: 507px;
    left: 475px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    opacity: 0px;

`
const FormRegisterTitle = styled.p`
    font-size: 12px;
    margin-left: 3rem;

    display: flex;
    color: #1d1d1d;
    margin-top: 1.5rem;
    font-weight: 700;

`;

const FormRegisterDiscription = styled.p`
    font-size: 12px;
    margin-left: 3rem;
    display: flex;
    color: #747474;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
    `
const FormPokemonSelect = styled.select`
    width: 438px;
    height: 45px;
    color: #747474;
    top: 715px;
    left: 585px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    opacity: 0px;
    `
const FormDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d5d5d5;
    margin-top: 1.5rem;
    border: 1px solid #d5d5d5;
`;

const FormEndDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    /* margin-top: 1rem;
    gap: 1rem; */
`;

const FormEndDiscription = styled.p<{ $taxa?: boolean }>`
    font-size: 14px;
    font-size: ${({ $taxa }) => ($taxa ? "8px" : "")};
    align-items: flex-start;
    display: flex;
    color: #747474;
    font-weight: 400;
    margin-top: 1rem;
    /* margin-right: 350px; */
    /* margin-bottom: 1rem; */
    `
const FormEndData = styled.p`
    font-size: 14px;
    align-items: flex-end;
    display: flex;
    color: #747474;
    font-weight: 400;
    margin-top: 1rem;
    /* margin-right: 350px; */
    /* margin-bottom: 1rem; */
    `

const FormTotal = styled.p`
    font-size: 24px;
    display: flex;
    color: #1d1d1d;
    font-weight: 600;
    margin-top: 1rem;
   
    `

export {
    FormContainer,
    FormTitle,
    FormLabel,
    FormInput,
    FormRowDiv,
    FormSelect,
    FormGroup,
    FormRegisterTitle,
    FormRegisterDiscription,
    FormPokemonSelect,
    FormDivider,
    FormEndDiv,
    FormEndDiscription,
    FormEndData,
    FormTotal
};
