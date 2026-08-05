import { useEffect, useState } from "react";
import "../css/hearts.css";

export default function Hearts() {

    const [hearts, setHearts] = useState([]);

    useEffect(() => {

        const createHeart = () => {

            const id = Date.now() + Math.random();

            const heart = {

                id,

                left: Math.random() * 100,

                size: Math.random() * 30 + 15,

                duration: Math.random() * 8 + 5,

                delay: Math.random() * 3,

                rotate: Math.random() * 360,

                color: [
                    "#ff2d75",
                    "#ff4fa3",
                    "#ff85c0",
                    "#ffffff"
                ][Math.floor(Math.random() * 4)]

            };

            setHearts(prev => [...prev, heart]);

            // Remove heart after its animation completes
            setTimeout(() => {

                setHearts(prev =>
                    prev.filter(item => item.id !== id)
                );

            }, (heart.duration + heart.delay) * 1000);

        };

        const interval = setInterval(createHeart, 350);

        return () => {

            clearInterval(interval);

        };

    }, []);

    return (

        <div className="heart-container">

            {

                hearts.map((heart) => (

                    <span

                        key={heart.id}

                        className="floating-heart"

                        style={{

                            left: `${heart.left}%`,

                            fontSize: `${heart.size}px`,

                            animationDuration: `${heart.duration}s`,

                            animationDelay: `${heart.delay}s`,

                            color: heart.color,

                            transform: `rotate(${heart.rotate}deg)`

                        }}

                    >

                        ❤️

                    </span>

                ))

            }

        </div>

    );

}