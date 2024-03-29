// Header.styles.ts
import styled from 'styled-components';

// Estilo para o header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

// Estilo para os botões do header
export const Button = styled.button<{ isQuemSomos?: boolean }>` // Adicionamos a propriedade isQuemSomos para identificar o botão "Quem Somos"
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 50px;
  background: ${({ isQuemSomos }) => (isQuemSomos ? '#fff' : '#E40F0F')}; // Alteramos o background para branco se for o botão "Quem Somos"
  color: ${({ isQuemSomos }) => (isQuemSomos ? '#000' : '#fff')}; // Alteramos a cor da fonte para preto se for o botão "Quem Somos"
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    //background-color: #0056b3;
  }
`;

// Estilo específico para o logo com a animação
export const Logo = styled.img<{ expanded: boolean }>`
  max-width: ${({ expanded }) => (expanded ? '100%' : '50px')};
  height: auto;
  transition: max-width 0.5s ease;
`;
