import { useState } from "react";
import {
    FaGift,
    FaHeart,
    FaBirthdayCake,
    FaStar,
    FaCrown,
    FaTimes,
    FaMusic
} from "react-icons/fa";

import "../css/surprise.css";

export default function Surprise() {

    const [open, setOpen] = useState(false);

    const [showMessage, setShowMessage] = useState(false);

    const openGift = () => {

        setOpen(true);

        setShowMessage(false);

    };

    const closeGift = () => {

        setOpen(false);

        setShowMessage(false);

    };

    return (

        <section className="surprise-page">

            {/* Background Decorations */}

            <div className="surprise-circle circle-one"></div>

            <div className="surprise-circle circle-two"></div>

            <div className="surprise-circle circle-three"></div>

            <div className="surprise-stars">

                <span>✨</span>

                <span>⭐</span>

                <span>💖</span>

                <span>✨</span>

                <span>🌸</span>

                <span>⭐</span>

            </div>


            {/* Main Heading */}

            <div className="surprise-heading">

                <span className="surprise-tag">

                    <FaGift />

                    A SPECIAL SURPRISE

                </span>

                <h1>

                    A Gift Made With

                    <span> Love ❤️</span>

                </h1>

                <p>

                    There is something beautiful waiting for you.

                    Open this little gift and see the special birthday

                    message made especially for you, Falak. ✨

                </p>

            </div>


            {/* Gift Closed */}

            {

                !open &&

                <div className="gift-area">

                    <div className="gift-glow"></div>

                    <div

                        className="gift-box"

                        onClick={openGift}

                    >

                        <div className="gift-lid">

                            <div className="gift-ribbon-vertical"></div>

                            <div className="gift-bow">

                                <span className="bow-left"></span>

                                <span className="bow-center"></span>

                                <span className="bow-right"></span>

                            </div>

                        </div>


                        <div className="gift-body">

                            <div className="gift-ribbon-horizontal"></div>

                            <FaGift />

                        </div>

                    </div>


                    <button

                        className="open-gift-button"

                        onClick={openGift}

                    >

                        <FaGift />

                        Open Your Birthday Gift

                        <FaHeart />

                    </button>


                    <p className="gift-note">

                        🎀 Click the gift box to open your surprise

                    </p>

                </div>

            }


            {/* Gift Open */}

            {

                open &&

                <div className="surprise-overlay">

                    <div className="floating-hearts">

                        <span>❤️</span>

                        <span>💖</span>

                        <span>💕</span>

                        <span>💗</span>

                        <span>❤️</span>

                        <span>💖</span>

                    </div>


                    <div className="surprise-card">


                        <button

                            className="close-surprise"

                            onClick={closeGift}

                        >

                            <FaTimes />

                        </button>


                        <div className="card-top-decoration">

                            <span>✨</span>

                            <span>💖</span>

                            <span>✨</span>

                        </div>


                        <div className="crown-icon">

                            <FaCrown />

                        </div>


                        <span className="birthday-badge">

                            <FaBirthdayCake />

                            HAPPY BIRTHDAY

                        </span>


                        <h2>

                            Happy Birthday

                            <span> Falak ❤️</span>

                        </h2>
                        <div className="birthday-photo">

    <img
        src="src/pages/6311860629874087183_120.jpg"
        alt="Falak"
    />

</div>


                        <p className="birthday-subtitle">

                            Today is not just your birthday...

                            It is a beautiful day because the person

                            who brings happiness into my life was born. 🌸

                        </p>


                        <div className="cake-frame">
                            

                            <div className="cake-light light-one"></div>

                            <div className="cake-light light-two"></div>

                            <div className="cake-light light-three"></div>

                            <img

                                src="src/pages/6311860629874087192_121.jpg"

                                alt="Birthday Cake"

                                className="birthday-cake"

                            />

                        </div>


                        <div className="wish-box">

                            <FaHeart />

                            <p>

                                May Allah always keep you happy,

                                healthy, successful and smiling.

                                May every dream in your heart

                                become a beautiful reality. 🤲❤️

                            </p>

                            <FaHeart />

                        </div>


                        <div className="love-message">

                            <FaStar />

                            <p>

                                You are not only a special person

                                in my life. You are my happiness,

                                my peace, my favorite person

                                and one of the most beautiful

                                blessings Allah has given me.

                            </p>

                            <FaStar />

                        </div>


                        <button

                            className="show-message-button"

                            onClick={() =>

                                setShowMessage(!showMessage)

                            }

                        >

                            <FaHeart />

                            {

                                showMessage

                                ?

                                "Hide My Special Message"

                                :

                                "Read My Special Message"

                            }

                            <FaHeart />

                        </button>


                        {

                            showMessage &&

                            <div className="secret-message">

                                <div className="message-heart">

                                    💌

                                </div>

                                <h3>

                                    A Message From Shahid ❤️

                                </h3>

                                <p>

                                    Falak, thank you for coming

                                    into my life and making every

                                    ordinary day feel special.

                                    Your smile gives me happiness,

                                    your words give me peace,

                                    and every conversation with you

                                    becomes a memory I want to keep.

                                </p>

                                <p>

                                    I pray that our relationship

                                    always stays strong, beautiful

                                    and full of trust. No matter

                                    how many days pass, I will

                                    always respect you, care for you

                                    and support you.

                                </p>

                                <div className="shayari">

                                    <span>❝</span>

                                    <p>

                                        Teri khushi mein meri khushi hai,

                                        Teri muskaan meri dua hai,

                                        Tu hamesha mere saath rahe,

                                        Bas itni si dil ki khwahish hai. ❤️

                                    </p>

                                    <span>❞</span>

                                </div>

                                <h4>

                                    Happy Birthday Once Again,

                                    My Princess 👑❤️

                                </h4>

                                <small>

                                    With lots of love,

                                    <b> Shahid ❤️</b>

                                </small>

                            </div>

                        }


                        <div className="surprise-footer">

                            <span>

                                <FaMusic />

                                A day full of happiness

                            </span>

                            <span>

                                <FaHeart />

                                Forever Special

                            </span>

                            <span>

                                <FaGift />

                                Made With Love

                            </span>

                        </div>


                    </div>

                </div>

            }


        </section>

    );

}