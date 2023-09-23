import { Link } from "react-router-dom";
import "./NavBar.css";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">VALORANT Wiki</h1>
      <ul className="nav-link-list">
        <li>
          <Link to="/">Agents</Link>
        </li>
        <li>
          <Link to="/maps">Maps</Link>
        </li>
      </ul>
    </nav>
  );
}
