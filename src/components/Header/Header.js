import React from "react";
import logo from "../../assets/images/Logo.svg";
import { HeaderMain } from "./Header.style";

const Header = () => {
  return (
    <HeaderMain>
      <img src={logo} alt="{logo}" />
    </HeaderMain>
  );
};

export default Header;
