import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="home-logo-container">
        <Link to="/">
          <p className="home-logo">PORTFOLIO</p>
        </Link>
      </div>
      <div className="middle-navbar-content">
        <Link className="links" to="/about">
          About
        </Link>

        <Link className="links" to="/account">
          Account
        </Link>
      </div>
      <div className="contact-button-container">
        <Link className="links" to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </nav>
  );
}
