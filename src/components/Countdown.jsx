import { useEffect, useState } from "react";
import "../css/countdown.css";

export default function Countdown() {

    const targetDate = new Date("2026-08-20T00:00:00");

    const getTime = () => {

        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance <= 0) {

            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                completed: true
            };

        }

        return {

            days: Math.floor(distance / (1000 * 60 * 60 * 24)),

            hours: Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            ),

            minutes: Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            ),

            seconds: Math.floor(
                (distance % (1000 * 60)) / 1000
            ),

            completed: false

        };

    };

    const [time, setTime] = useState(getTime());

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(getTime());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <section className="countdown-section">

            <div className="countdown-heading">

                <h1>
                    🎂 Birthday Countdown ❤️
                </h1>

                <p>
                    Every second brings us closer to your special day ❤️
                </p>

            </div>

            {

                time.completed ?

                    <div className="birthday-done">

                        🎉 Happy Birthday Falak ❤️🥳

                    </div>

                    :

                    <div className="countdown-grid">

                        <div
                            className="time-card"
                            style={{ animationDelay: "0s" }}
                        >

                            <div className="number">

                                {String(time.days).padStart(2, "0")}

                            </div>

                            <div className="label">

                                Days

                            </div>

                        </div>

                        <div
                            className="time-card"
                            style={{ animationDelay: ".15s" }}
                        >

                            <div className="number">

                                {String(time.hours).padStart(2, "0")}

                            </div>

                            <div className="label">

                                Hours

                            </div>

                        </div>

                        <div
                            className="time-card"
                            style={{ animationDelay: ".30s" }}
                        >

                            <div className="number">

                                {String(time.minutes).padStart(2, "0")}

                            </div>

                            <div className="label">

                                Minutes

                            </div>

                        </div>

                        <div
                            className="time-card"
                            style={{ animationDelay: ".45s" }}
                        >

                            <div className="number">

                                {String(time.seconds).padStart(2, "0")}

                            </div>

                            <div className="label">

                                Seconds

                            </div>

                        </div>

                    </div>

            }

        </section>

    );

}