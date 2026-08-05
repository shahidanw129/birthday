import { useEffect, useState } from "react";
import {
    FaBell,
    FaSearch,
    FaHeart,
    FaMoon
} from "react-icons/fa";

import "../css/navbar.css";

export default function Navbar() {

    const [time, setTime] = useState("");

    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date();

            setTime(

                now.toLocaleTimeString("en-IN", {

                    hour: "2-digit",

                    minute: "2-digit",

                    second: "2-digit"

                })

            );

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="navbar">

            <div className="nav-left">

                <h2>

                    🎂 Birthday Dashboard

                </h2>

            </div>

            <div className="search-box">

                <FaSearch />

                <input

                    type="text"

                    placeholder="Search Memories..."

                />

            </div>

            <div className="nav-right">

                <div className="clock">

                    🕒 {time}

                </div>

                <div className="icon">

                    <FaBell />

                    <span>3</span>

                </div>

                <div className="icon">

                    <FaHeart />

                </div>

                <div className="icon">

                    <FaMoon />

                </div>

                <div className="profile">

                    <img

                        src="/images/6311860629874087161_121.jpg"

                        alt="Falak"

                    />

                    <div>

                        <h4>

                            Falak

                        </h4>

                        <small>

                            Birthday Girl ❤️

                        </small>

                    </div>

                </div>

            </div>

        </div>

    );

}