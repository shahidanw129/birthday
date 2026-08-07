import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHeart,
  FaImages,
  FaEnvelope,
  FaGift,
  FaStar,
  FaUserAlt,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import "../css/sidebar.css";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("birthdayLogin");
    navigate("/");
  };

  return (
    <>
      <aside className={`sidebar ${open ? "active" : ""}`}>
        <button
          className="close-menu"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        <div className="logo">
          <img
            src="/images/6311860629874087157_121.jpg"
            alt="Falak"
            className="sidebar-photo"
          />

          <h2>Falak ❤️</h2>
          <span>Birthday Dashboard</span>
        </div>

        <nav className="menu">
          <NavLink
            to="/dashboard"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/gallery"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaImages /> Gallery
          </NavLink>

          <NavLink
            to="/memories"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaHeart /> Memories
          </NavLink>

          <NavLink
            to="/letter"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaEnvelope /> Letter
          </NavLink>

          <NavLink
            to="/surprise"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaGift /> Surprise
          </NavLink>

          <NavLink
            to="/wishes"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaStar /> Birthday Wishes
          </NavLink>

          <NavLink
            to="/about-falak"
            className="item"
            onClick={() => setOpen(false)}
          >
            <FaUserAlt /> About Falak
          </NavLink>
        </nav>

        <div className="bottom">
          <button onClick={logout}>
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}