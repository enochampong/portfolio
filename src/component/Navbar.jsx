import { Link, NavLink } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav className="Navbar">
//       <ul>
//         <h1 className="h1">Enoch</h1>
//         <Link to="./"> Home</Link>
//         <Link to="./Projects"> Projects</Link>
//         <Link to="./AboutPage"> About </Link>
//         <Link to="./Contact"> Contact</Link>
//       </ul>
//     </nav>
//   );
// }

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
            E N O C H
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
            <>
              <NavLink
                to={"/projects"}
                className="navbar-item"
                onClick={toggleBurgerMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to={"/contact"}
                className="navbar-item"
                onClick={toggleBurgerMenu}
              >
                Contact
              </NavLink>
              <NavLink
                to={"/about"}
                className="navbar-item"
                onClick={toggleBurgerMenu}
              >
                About
              </NavLink>
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
