import { NavLink, useNavigate } from "react-router-dom";

import {

    FaHome,

    FaHeart,

    FaImages,

    FaEnvelope,

    FaGift,

    FaStar,

    FaUserAlt,

    FaSignOutAlt

} from "react-icons/fa";

import "../css/sidebar.css";

export default function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("birthdayLogin");

        navigate("/");

    };

    return (

        <aside className="sidebar">

            {/* LOGO */}

            <div className="logo">

                <img

                    src="src/components/6311860629874087157_121.jpg"

                    alt="Falak"

                    className="sidebar-photo"

                />

                <h2>

                    Falak ❤️

                </h2>

                <span>

                    Birthday Dashboard

                </span>

            </div>

            {/* MENU */}

            <div className="menu">

                <NavLink

                    to="/dashboard"

                    className="item"

                >

                    <FaHome />

                    Dashboard

                </NavLink>

                <NavLink

                    to="/gallery"

                    className="item"

                >

                    <FaImages />

                    Gallery

                </NavLink>

                <NavLink

                    to="/memories"

                    className="item"

                >

                    <FaHeart />

                    Memories

                </NavLink>

                <NavLink

                    to="/letter"

                    className="item"

                >

                    <FaEnvelope />

                    Letter

                </NavLink>

                <NavLink

                    to="/surprise"

                    className="item"

                >

                    <FaGift />

                    Surprise

                </NavLink>

                <NavLink

                    to="/wishes"

                    className="item"

                >

                    <FaStar />

                    Birthday Wishes

                </NavLink>

                <NavLink

                    to="/about-falak"

                    className="item"

                >

                    <FaUserAlt />

                    About Falak

                </NavLink>

            </div>

            {/* LOGOUT */}

            <div className="bottom">

                <button

                    onClick={logout}

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </aside>

    );

}