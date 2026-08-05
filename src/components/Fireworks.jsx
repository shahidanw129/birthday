import { useEffect, useRef } from "react";
import "../css/firework.css";
export default function Fireworks({

    duration = 10000,

    onFinish

}) {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        let particles = [];

        let animationFrame;

        let interval;

        function resizeCanvas() {

            canvas.width = window.innerWidth;

            canvas.height = window.innerHeight;

        }

        resizeCanvas();

        class Particle {

            constructor(x, y, color) {

                this.x = x;

                this.y = y;

                this.color = color;

                this.radius = Math.random() * 3 + 1;

                this.speedX = (Math.random() - 0.5) * 12;

                this.speedY = (Math.random() - 0.5) * 12;

                this.alpha = 1;

                this.gravity = 0.05;

            }

            update() {

                this.x += this.speedX;

                this.y += this.speedY;

                this.speedY += this.gravity;

                this.alpha -= 0.015;

            }

            draw() {

                ctx.save();

                ctx.globalAlpha = this.alpha;

                ctx.beginPath();

                ctx.arc(

                    this.x,

                    this.y,

                    this.radius,

                    0,

                    Math.PI * 2

                );

                ctx.fillStyle = this.color;

                ctx.shadowBlur = 25;

                ctx.shadowColor = this.color;

                ctx.fill();

                ctx.restore();

            }

        }

        const colors = [

            "#ff0055",

            "#ff66ff",

            "#00ffff",

            "#00ff99",

            "#ffffff",

            "#ffd700",

            "#ff8800"

        ];

        function createFirework(x, y) {

            const color = colors[

                Math.floor(

                    Math.random() * colors.length

                )

            ];

            for (let i = 0; i < 120; i++) {

                particles.push(

                    new Particle(

                        x,

                        y,

                        color

                    )

                );

            }

        }

        function randomFirework() {

            createFirework(

                Math.random() * canvas.width,

                Math.random() * canvas.height * 0.6

            );

        }

        function animate() {

            ctx.fillStyle = "rgba(0,0,0,0.15)";

            ctx.fillRect(

                0,

                0,

                canvas.width,

                canvas.height

            );

            particles = particles.filter((particle) => {

                particle.update();

                particle.draw();

                return particle.alpha > 0;

            });

            animationFrame = requestAnimationFrame(animate);

        }

        animate();
                interval = setInterval(() => {

            randomFirework();

        }, 1800);

        const clickHandler = (e) => {

            createFirework(

                e.clientX,

                e.clientY

            );

        };

        window.addEventListener(

            "click",

            clickHandler

        );

        window.addEventListener(

            "resize",

            resizeCanvas

        );

        const stopTimer = setTimeout(() => {

            clearInterval(interval);

            if (onFinish) {

                onFinish();

            }

        }, duration);

        return () => {

            cancelAnimationFrame(

                animationFrame

            );

            clearInterval(

                interval

            );

            clearTimeout(

                stopTimer

            );

            window.removeEventListener(

                "click",

                clickHandler

            );

            window.removeEventListener(

                "resize",

                resizeCanvas

            );

        };

    }, [duration, onFinish]);

    return (

        <div className="fireworks-wrapper">

            <canvas

                ref={canvasRef}

                className="fireworks-canvas"

            />

            <div className="firework-message">

                <h1>

                    🎆 Happy Birthday Falak ❤️

                </h1>

                <p>

                    Wishing you endless happiness,

                    beautiful memories,

                    and a life full of love,

                    smiles and success.

                </p>

            </div>

        </div>

    );

}
