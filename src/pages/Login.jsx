import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaUserAlt,
    FaLock,
    FaHeart,
    FaStar
} from "react-icons/fa";

import "../css/login.css";


export default function Login(){

    const navigate = useNavigate();


    const [username,setUsername] = useState("");

    const [password,setPassword] = useState("");

    const [error,setError] = useState("");

    const [loading,setLoading] = useState(false);



    const handleSubmit=(e)=>{

        e.preventDefault();



        if(
            username.toLowerCase()==="falak" &&
            password==="shahid@falak"
        ){

            localStorage.setItem(
                "birthdayLogin",
                "true"
            );


            setLoading(true);



            setTimeout(()=>{

                navigate("/dashboard");

            },5000);



        }
        else{

            setError(
                "❌ Invalid Username or Password"
            );

        }


    };



    return(


        <div className="login-container">



            {/* Animated Background */}


            <div className="stars">


                {
                    Array.from(
                        {
                            length:60
                        }
                    ).map((_,i)=>(

                        <span
                            key={i}
                            className="star"
                        >

                            <FaStar/>

                        </span>

                    ))
                }


            </div>





            <div className="floating-hearts">


                {
                    Array.from(
                        {
                            length:25
                        }
                    ).map((_,i)=>(

                        <span
                            key={i}
                            className="heart"
                        >

                            ❤️

                        </span>


                    ))
                }


            </div>






            {
                loading && (


                    <div className="loading-screen">


                        <div className="loader-heart">

                            ❤️

                        </div>



                        <h1>

                            Preparing Your Surprise...

                        </h1>


                        <p>

                            💖 Collecting Beautiful Memories

                        </p>


                        <p>

                            🎂 Decorating Birthday Cake

                        </p>


                        <p>

                            🎁 Wrapping Your Gift

                        </p>


                        <p>

                            🌹 Loading Birthday Wishes

                        </p>


                        <h2>

                            Welcome My Princess Falak ❤️

                        </h2>



                    </div>


                )
            }







            <div className="glass-card">





                <div className="profile-box">


                    <img

                        src="src/pages/6311860629874087162_121.jpg"

                        className="profile"

                        alt="Falak"

                    />


                    <div className="profile-glow"></div>


                </div>







                <h1>

                    Happy Birthday

                </h1>


                <h2>

                    Falak ❤️

                </h2>



                <p className="welcome">


                    Welcome To Your Birthday Surprise 🎁

                </p>







                <form
                    onSubmit={handleSubmit}
                >




                    <div className="input-box">


                        <FaUserAlt/>


                        <input

                            type="text"

                            placeholder="Enter Username"

                            value={username}

                            onChange={
                                (e)=>
                                setUsername(
                                    e.target.value
                                )
                            }

                        />


                    </div>







                    <div className="input-box">


                        <FaLock/>


                        <input

                            type="password"

                            placeholder="Enter Password"

                            value={password}

                            onChange={
                                (e)=>
                                setPassword(
                                    e.target.value
                                )
                            }

                        />


                    </div>






                    <button
                        type="submit"
                    >


                        <FaHeart/>

                        OPEN SURPRISE ❤️


                    </button>






                </form>







                <div className="error">


                    {error}


                </div>







                <div className="bottom">


                    Made With ❤️ By Shahid


                </div>





            </div>





        </div>


    );

}