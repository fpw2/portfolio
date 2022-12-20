import { NavLink } from "react-router-dom";
import line from "../../assets/line.png";

export default function Header() {
  let activeStyle = {
    textDecoration: "underline",
    color: "#c8aa6e"
  };

  return (
    <div className="header">
      <nav className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            HOME
          </NavLink>
        </li>
        <img className="separator" src={line} alt="separator" />
        {/* <li className="nav-item">
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT
          </NavLink>
        </li> */}
        {/* <img className="separator" src={line} alt="separator" /> */}
        <li className="nav-item">
          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SKILLS
          </NavLink>
        </li>
        <img className="separator" src={line} alt="separator" />
        <li className="nav-item">
          <NavLink
            to="/works"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            WORKS
          </NavLink>
        </li>
        <img className="separator" src={line} alt="separator" />
        <li className="nav-item">
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </nav>
    </div>
  );
}
