function MobileMenu() {
  return (
    <div>
      <div className="hamburger-menu-wrapper"></div>

      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__links">
          <li className="mobile-menu__link">
            <a href=".">About</a>
          </li>
          <li className="mobile-menu__link">
            <a href=".">Careers</a>
          </li>
          <li className="mobile-menu__link">
            <a href=".">Events</a>
          </li>
          <li className="mobile-menu__link">
            <a href=".">Products</a>
          </li>
          <li className="mobile-menu__link">
            <a href=".">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
