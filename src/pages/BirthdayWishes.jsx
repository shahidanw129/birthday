import { useState } from "react";

import "../css/birthdayWishes.css";

export default function BirthdayWishes() {

    const [selectedWish, setSelectedWish] = useState(null);

    const wishes = [

        {
            icon: "🎂",
            title: "A Beautiful Birthday",
            text:
                "Happy Birthday, Falak ❤️ May this beautiful day bring endless happiness, peaceful moments and many lovely surprises into your life."
        },

        {
            icon: "🤲",
            title: "A Prayer For You",
            text:
                "May Allah always protect you, keep you healthy, make your future bright and fulfill every beautiful dream hidden in your heart."
        },

        {
            icon: "😊",
            title: "Keep Smiling",
            text:
                "Your smile is very special. May you always have thousands of reasons to smile and may sadness stay far away from you."
        },

        {
            icon: "👑",
            title: "My Princess",
            text:
                "You are a wonderful and precious person. Stay confident, stay happy and always remember how special you are."
        },

        {
            icon: "💖",
            title: "Our Beautiful Bond",
            text:
                "Every conversation with you makes my day better. Our relationship is strong because it is built with trust, care, respect and understanding."
        },

        {
            icon: "✨",
            title: "A Bright Future",
            text:
                "May your future be full of success, happiness, peace and beautiful opportunities. I hope every dream of yours becomes reality."
        }

    ];

    return (

        <section className="birthday-wishes-page">

            <div className="wish-background">

                <span className="floating-star star-one">
                    ✨
                </span>

                <span className="floating-star star-two">
                    ⭐
                </span>

                <span className="floating-star star-three">
                    💖
                </span>

                <span className="floating-star star-four">
                    🌙
                </span>

                <span className="floating-star star-five">
                    ✨
                </span>

            </div>


            <div className="wishes-container">


                <div className="wishes-hero">

                    <div className="birthday-badge">

                        🎉 A SPECIAL DAY TO CELEBRATE 🎉

                    </div>


                    <h1>

                        Happy Birthday

                        <span>

                            Falak ❤️

                        </span>

                    </h1>


                    <p>

                        Today is not just another day.

                        It is the beautiful day when a wonderful
                        person came into this world. 🎂

                    </p>


                    <div className="hero-hearts">

                        <span>❤️</span>

                        <span>💖</span>

                        <span>💕</span>

                    </div>
                    <div className="birthday-photo">
    <img
        src="src/pages/6311860629874087184_120.jpg"
        alt="Falak"
    />
</div>

                </div>



                <div className="main-birthday-card">


                    <div className="cake-side">

                        <div className="cake-glow">

                            🎂

                        </div>


                        <h2>

                            Make A Wish

                        </h2>
<div className="wish-photo">
    <img
        src="src/pages/6311860629874087185_121.jpg"
        alt="Falak"
    />
</div>

                        <p>

                            Close your eyes, make a beautiful wish
                            and believe that Allah has something
                            wonderful planned for you. 🤲

                        </p>


                        <div className="birthday-date">

                            <span>

                                🎁

                            </span>

                            Your Special Day

                        </div>

                    </div>



                    <div className="message-side">


                        <span className="message-label">

                            💌 A MESSAGE FROM SHAHID

                        </span>


                        <h2>

                            My Dear Falak ❤️

                        </h2>
<div className="message-photo">
    <img
        src="src/pages/6311860629874087193_121.jpg"
        alt="Falak"
    />
</div>

                        <p>

                            On your birthday, I want to thank Allah
                            for bringing such a beautiful person into
                            my life. You have become an important part
                            of my happiness and my everyday smile.

                        </p>


                        <p>

                            I pray that Allah always keeps you happy,
                            healthy, safe and successful. May every
                            dream of yours come true and may your life
                            always be filled with peace and blessings.

                        </p>


                        <p>

                            Keep smiling because your smile makes
                            everything feel more beautiful. 😊

                        </p>


                        <div className="signature">

                            <span>

                                With lots of care and love ❤️

                            </span>

                            <strong>

                                — Shahid

                            </strong>

                        </div>


                    </div>

                </div>



                <div className="section-heading">

                    <span>

                        🌹

                    </span>


                    <h2>

                        Beautiful Wishes For You

                    </h2>


                    <p>

                        Click any card to read a special birthday wish.

                    </p>

                </div>



                <div className="wishes-grid">

                    {

                        wishes.map((wish, index) => (

                            <button

                                className={`wish-card ${
                                    selectedWish === index
                                        ? "selected-wish"
                                        : ""
                                }`}

                                key={index}

                                onClick={() =>
                                    setSelectedWish(index)
                                }

                            >


                                <div className="wish-number">

                                    0{index + 1}

                                </div>


                                <div className="wish-icon">

                                    {wish.icon}

                                </div>


                                <h3>

                                    {wish.title}

                                </h3>


                                <p>

                                    {wish.text}

                                </p>


                                <span className="read-wish">

                                    Read With Love ❤️

                                </span>


                            </button>

                        ))

                    }

                </div>



                {

                    selectedWish !== null && (

                        <div className="selected-message">


                            <div className="selected-icon">

                                {

                                    wishes[selectedWish].icon

                                }

                            </div>


                            <div>

                                <span>

                                    YOUR SPECIAL WISH

                                </span>


                                <h2>

                                    {

                                        wishes[selectedWish].title

                                    }

                                </h2>


                                <p>

                                    {

                                        wishes[selectedWish].text

                                    }

                                </p>

                            </div>


                            <button

                                onClick={() =>
                                    setSelectedWish(null)
                                }

                            >

                                ✕


                            </button>


                        </div>

                    )

                }



                <div className="birthday-quote">


                    <span>

                        “

                    </span>


                    <h2>

                        Har din khoobsurat hota hai,

                        lekin tumhara birthday sabse khaas hai,

                        kyunki is din meri zindagi ki

                        ek bahut pyari insaan is duniya me aayi. ❤️

                    </h2>


                    <p>

                        Happy Birthday Once Again, Falak 👑

                    </p>


                    <span>

                        ”

                    </span>


                </div>



                <div className="final-wish">


                    <div className="final-wish-icon">

                        🎁

                    </div>


                    <h2>

                        One Last Birthday Wish

                    </h2>
                    <div className="final-photo">
    <img
        src="src/pages/6311860629874087194_121.jpg"
        alt="Falak"
    />
</div>


                    <p>

                        May your life always be full of happiness,

                        your heart always be peaceful,

                        your dreams always be big,

                        and your smile always remain beautiful. ❤️

                    </p>


                    <div className="final-hearts">

                        ❤️ 💖 💕 💗 ❤️

                    </div>


                </div>


            </div>


        </section>

    );

}