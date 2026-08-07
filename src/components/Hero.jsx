import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/hero.css";

export default function Hero() {

    const navigate = useNavigate();

    const birthday = new Date("2026-08-15T00:00:00");

    const calculate = () => {

        const now = new Date();

        const diff = birthday - now;

        if (diff <= 0) {

            return {
                days:"00",
                hours:"00",
                minutes:"00",
                seconds:"00"
            };

        }

        return {

            days:String(
                Math.floor(diff / (1000 * 60 * 60 * 24))
            ).padStart(2,"0"),

            hours:String(
                Math.floor((diff / (1000 * 60 * 60)) % 24)
            ).padStart(2,"0"),

            minutes:String(
                Math.floor((diff / (1000 * 60)) % 60)
            ).padStart(2,"0"),

            seconds:String(
                Math.floor((diff / 1000) % 60)
            ).padStart(2,"0")

        };

    };


    const [time,setTime] = useState(calculate());


    useEffect(()=>{

        const timer=setInterval(()=>{

            setTime(calculate());

        },1000);


        return()=>clearInterval(timer);


    },[]);



    return (

        <section className="hero">


            <div className="hero-left">


                <span className="hero-badge">

                    🎉 Birthday Special

                </span>



                <h1>

                    Happy Birthday

                    <br/>

                    <span>Falak ❤️</span>

                </h1>



                <p>

                    Dear Falak,

                    <br/><br/>

                    Today is one of the most beautiful days because it celebrates you.

                    May Allah always bless you with happiness,

                    good health, endless smiles,

                    success and peace.

                    Thank you for making every moment beautiful.

                </p>



                <div className="hero-buttons">


                    <button

                    className="primary-btn"

                    onClick={()=>navigate("/surprise")}

                    >

                        🎁 Open Surprise

                    </button>



                    <button

                    className="secondary-btn"

                    onClick={()=>navigate("/gallery")}

                    >

                        📸 Gallery

                    </button>


                </div>




                <div className="counter">


                    <div className="box">

                        <h2>{time.days}</h2>

                        <p>Days</p>

                    </div>


                    <div className="box">

                        <h2>{time.hours}</h2>

                        <p>Hours</p>

                    </div>


                    <div className="box">

                        <h2>{time.minutes}</h2>

                        <p>Minutes</p>

                    </div>


                    <div className="box">

                        <h2>{time.seconds}</h2>

                        <p>Seconds</p>

                    </div>


                </div>


            </div>




            <div className="hero-right">


                <div className="photo-circle">

                    <img

                    src="/images/6311860629874087153_121.jpg"

                    alt="Falak"

                    className="hero-photo"

                    />

                </div>



                <div className="love-card">

                    ❤️ Forever Together

                </div>



                <div className="wish-card">

                    🎂 Wishing You Endless Happiness

                </div>



            </div>



        </section>

    );

}