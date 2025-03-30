import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  return (
    <div className="">
      <nav
        className="navbar is-success"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item is-size-4">
            <div className="has-text-weight-bold	">W E L C O M E</div>
          </NavLink>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
            onClick={toggleBurgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-end">
            <></>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
