import Slide from "./Slide";
import { NavLink, Route, Routes } from "react-router-dom";
import Career from "./Career";
import Formation from "./Formation";

export default function About() {
  return (
    <section className="about">
      bonjo
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                to="career"
                className={({ isActive }) => (isActive ? "tab-active" : "")}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="formation"
                className={({ isActive }) => (isActive ? "tab-active" : "")}
              >
                Formation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="storage"
                className={({ isActive }) => (isActive ? "tab-active" : "")}
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/career" element={<Career />} />
          <Route path="/formation" element={<Formation />} />
        </Routes>
      </div>
    </section>
  );
}
