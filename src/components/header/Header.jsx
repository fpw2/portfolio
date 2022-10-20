import { NavLink } from "react-router-dom";

export default function Header() {
    let activeStyle = {
        textDecoration: "underline",
    }

    return (
        <div>
            <nav className="nav">
                <li className="nav-item">
                    <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink>
                </li>
                <li className="separator"></li>
                <li className="nav-item">
                    <NavLink to="/about" style={({isActive}) => (isActive ? activeStyle : undefined)}>ABOUT</NavLink>
                </li>
                <li className="separator"></li>
                <li className="nav-item">               
                    <NavLink to="/skills" style={({isActive}) => (isActive ? activeStyle : undefined)}>SKILLS</NavLink>
                </li>
                <li className="separator"></li>
                <li className="nav-item">
                    <NavLink to="/work" style={({isActive}) => (isActive ? activeStyle : undefined)}>WORK</NavLink>
                </li>
                <li className="separator"></li>
                <li className="nav-item">
                    <NavLink to="/contact" style={({isActive}) => (isActive ? activeStyle : undefined)}>CONTACT</NavLink>
                </li>
            </nav>
        </div>
    )
}