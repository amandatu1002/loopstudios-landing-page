import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import logo from "./images/logo.svg";
import MobileMenu from "./MobileMenu";

function Header() {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <header className="header">
      <div className="content-wrapper header__content-wrapper">
        <a className="header__logo-link" href=".">
          <img className="header__logo" src={logo} alt="Loopstudios logo" />
        </a>
        {width <= 699 ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
}

export default Header;
