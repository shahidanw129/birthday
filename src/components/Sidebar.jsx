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


export default function Sidebar(){

    const navigate = useNavigate();


    const logout = ()=>{

        localStorage.removeItem("birthdayLogin");

        navigate("/");

    };


    return(

        <aside className="sidebar">


            <div className="logo">


                <img
                src="/images/6311860629874087157_121.jpg"
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



            <div className="menu">


                <NavLink to="/dashboard" className="item">
                    <FaHome/>
                    <span>Dashboard</span>
                </NavLink>


                <NavLink to="/gallery" className="item">
                    <FaImages/>
                    <span>Gallery</span>
                </NavLink>


                <NavLink to="/memories" className="item">
                    <FaHeart/>
                    <span>Memories</span>
                </NavLink>


                <NavLink to="/letter" className="item">
                    <FaEnvelope/>
                    <span>Letter</span>
                </NavLink>


                <NavLink to="/surprise" className="item">
                    <FaGift/>
                    <span>Surprise</span>
                </NavLink>


                <NavLink to="/wishes" className="item">
                    <FaStar/>
                    <span>Birthday Wishes</span>
                </NavLink>


                <NavLink to="/about-falak" className="item">
                    <FaUserAlt/>
                    <span>About Falak</span>
                </NavLink>



            </div>



            <div className="bottom">

                <button onClick={logout}>

                    <FaSignOutAlt/>

                    <span>Logout</span>

                </button>

            </div>


        </aside>

    )

}