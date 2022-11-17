import { NavLink } from "react-router-dom";
import line from "../../assets/line.png";

export default function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="header">
      <nav className="nav">
        <li className="nav-item">
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
            to="/work"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            WORK
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
