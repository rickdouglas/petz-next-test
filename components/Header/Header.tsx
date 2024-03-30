import React from "react";
import {
  HeaderContainer,
  HeaderDescription,
  HeaderNavs,
  HeaderTitle,
} from "./Header.styles";

interface HeaderProps {
  title: string;
  discription: string;
  navs: string;
}

const Header: React.FC<HeaderProps> = ({ title, discription, navs }) => {
  return (
    <HeaderContainer>
      <HeaderNavs>{navs}</HeaderNavs>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{discription}</HeaderDescription>
    </HeaderContainer>
  );
};

export default Header;
