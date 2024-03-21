import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`container ${style.header__wrapper} `}>
        <div className={`${style.header__logo}`}>Logo</div>
        <div className={`${style.header__navigation}`}>
          <NavigationMenu />
        </div>
        <div className={`${style.header__login}`}>LogIn</div>
      </div>
    </header>
  );
};

export default Header;
