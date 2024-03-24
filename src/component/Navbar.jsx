import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="./"> Home</Link>
        <Link to="./Projects"> Projects</Link>
        <Link to="./AboutPage"> About </Link>
        <Link to="./Contact"> Contact</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
