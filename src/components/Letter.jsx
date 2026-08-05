import { useState } from "react";

import {
    FaHeart,
    FaGift,
    FaBirthdayCake,
    FaQuoteLeft,
    FaCrown,
    FaStar,
    FaInfinity
} from "react-icons/fa";

import "../css/letter.css";


export default function Letter() {

    const [showSurprise, setShowSurprise] = useState(false);


    return (

        <section className="letter-section">


            <div className="letter-bg-circle circle-one"></div>

            <div className="letter-bg-circle circle-two"></div>

            <div className="letter-bg-circle circle-three"></div>

            <div className="letter-bg-circle circle-four"></div>


            <div className="floating-heart heart-one">

                ❤️

            </div>


            <div className="floating-heart heart-two">

                💕

            </div>


            <div className="floating-heart heart-three">

                💖

            </div>


            <div className="floating-heart heart-four">

                💗

            </div>


            <div className="floating-heart heart-five">

                ✨

            </div>



            <div className="letter-header">


                <div className="letter-top-tag">

                    <FaHeart />

                    A MESSAGE WRITTEN WITH LOVE

                    <FaHeart />

                </div>


                <h1>

                    A Special Birthday Letter

                    <span>

                        For My Dear Falak ❤️

                    </span>

                </h1>


                <p>

                    Some feelings are difficult to explain in words,
                    but this letter is a small attempt to tell you
                    how special you are to me and how much happiness
                    you bring into my life.

                </p>


                <div className="header-hearts">

                    <span>❤️</span>

                    <span>💖</span>

                    <span>❤️</span>

                </div>


            </div>



            <div className="letter-wrapper">


                <div className="letter-card">


                    <div className="letter-card-top">


                        <div className="letter-icon">

                            <FaBirthdayCake />

                        </div>


                        <div className="birthday-label">

                            <FaCrown />

                            HAPPY BIRTHDAY PRINCESS

                        </div>


                    </div>



                    <h2>

                        Happy Birthday

                        <span>

                            My Dear Falak ❤️

                        </span>

                    </h2>



                    <div className="gold-line">

                        <span></span>

                        <FaHeart />

                        <span></span>

                    </div>



                    <div className="letter-content">


                        <p className="dear-name">

                            Dear Falak ❤️

                        </p>


                        <p>

                            Today is not just another day for me,
                            because today is the birthday of the person
                            who brings happiness, peace and countless
                            beautiful feelings into my life.

                        </p>


                        <p>

                            I pray that Allah always keeps you happy,
                            healthy, successful and smiling.
                            May every dream in your heart become reality
                            and may every step of your life bring you
                            closer to happiness and success.

                        </p>


                        <p>

                            Thank you for becoming such an important
                            part of my life. Your words make me smile,
                            your presence makes ordinary moments special,
                            and every conversation with you becomes a
                            memory that I want to keep forever.

                        </p>


                        <p>

                            You are not only someone I love,
                            you are also my comfort, my peace,
                            my favorite person and one of the most
                            beautiful blessings in my life.

                        </p>



                        <div className="quote-box">

                            <FaQuoteLeft />

                            <p>

                                "Distance may keep us apart for now,
                                but our strong relationship,
                                trust and beautiful conversations
                                always keep our hearts close."

                            </p>

                        </div>



                        <p>

                            Our relationship is very special to me.
                            We share happiness, support each other,
                            understand each other and make even
                            simple conversations feel beautiful.

                        </p>


                        <p>

                            I promise that I will always respect you,
                            care for you, listen to you and support you.
                            I will always try to protect the happiness
                            that we have created together.

                        </p>



                        <div className="shayari-card">

                            <FaStar />

                            <p>

                                "Teri muskaan meri khushi ban jaati hai,<br />

                                Teri har baat dil ko chhoo jaati hai,<br />

                                Door hokar bhi tu dil ke paas rehti hai,<br />

                                Falak, tu meri zindagi ko khoobsurat
                                bana jaati hai. ❤️"

                            </p>

                        </div>



                        <div className="promise-box">


                            <div className="promise-title">

                                <FaHeart />

                                <h3>

                                    My Promises To You

                                </h3>

                            </div>


                            <div className="promise-list">


                                <div>

                                    <span>❤️</span>

                                    I will always respect you.

                                </div>


                                <div>

                                    <span>🤝</span>

                                    I will support your dreams.

                                </div>


                                <div>

                                    <span>😊</span>

                                    I will always try to make you smile.

                                </div>


                                <div>

                                    <span>💖</span>

                                    I will always care for you.

                                </div>


                                <div>

                                    <span>🌹</span>

                                    I will value our relationship.

                                </div>


                                <div>

                                    <span>✨</span>

                                    I will stay honest and loyal.

                                </div>


                            </div>


                        </div>



                        <div className="special-message">


                            <FaInfinity />


                            <h3>

                                You Are Always Special To Me

                            </h3>


                            <p>

                                Every day becomes more beautiful because
                                you are part of my life. I hope our bond
                                continues to grow with love, trust,
                                respect, happiness and countless
                                beautiful memories.

                            </p>


                        </div>



                        <p>

                            On your birthday, I want you to remember
                            that you are deeply valued and truly special.
                            Never stop believing in yourself because
                            you are capable of achieving wonderful things.

                        </p>


                        <p>

                            May your new year of life bring you
                            beautiful opportunities, peaceful moments,
                            success in everything you do and endless
                            reasons to smile.

                        </p>


                        <p className="final-wish">

                            Once again, from the bottom of my heart...

                        </p>



                        <div className="birthday-wish">

                            🎂 Happy Birthday My Princess ❤️

                            <span>

                                May your life always shine with happiness ✨

                            </span>

                        </div>



                    </div>



                    <div className="letter-footer">


                        <button

                            className="surprise-button"

                            onClick={() =>
                                setShowSurprise(!showSurprise)
                            }

                        >

                            <FaGift />

                            {

                                showSurprise

                                    ? "Close Surprise"

                                    : "Open Birthday Surprise"

                            }

                        </button>



                        <div className="forever-text">

                            <FaHeart />

                            Forever Special

                        </div>


                    </div>



                    {

                        showSurprise && (

                            <div className="surprise-message">


                                <div className="surprise-crown">

                                    👑

                                </div>


                                <h2>

                                    My Beautiful Birthday Princess ❤️

                                </h2>


                                <p>

                                    I hope your birthday is filled
                                    with happiness, beautiful smiles,
                                    sweet memories and endless blessings.
                                    You deserve all the happiness
                                    in this world.

                                </p>


                                <div>

                                    🎂 ❤️ 🎁 ✨ 🌹

                                </div>


                            </div>

                        )

                    }



                    <div className="letter-sign">


                        <p>

                            With lots of love,

                        </p>


                        <h3>

                            Shahid ❤️

                        </h3>


                        <span>

                            Always wishing for your happiness

                        </span>


                    </div>


                </div>


            </div>



            <div className="letter-bottom">


                <div>

                    🌹 ❤️ ✨

                </div>


                <h2>

                    Our Beautiful Story Continues...

                </h2>


                <p>

                    Every memory is special,
                    every conversation is precious,
                    and every day gives us another
                    reason to smile together.

                </p>


            </div>


        </section>

    );

}