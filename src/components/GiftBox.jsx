import { useState } from "react";
import "../css/gift.css";
import { FaGift, FaHeart, FaBirthdayCake } from "react-icons/fa";

export default function GiftBox() {

    const [open, setOpen] = useState(false);

    return (

        <section className="gift-section">

            <div className="gift-title">

                <h1>🎁 Birthday Surprise</h1>

                <p>
                    A special surprise made with lots of love ❤️
                </p>

            </div>

            <div className="gift-container">

                {!open ? (

                    <div
                        className="gift-box"
                        onClick={() => setOpen(true)}
                    >

                        <div className="gift-top"></div>

                        <div className="gift-body">

                            <FaGift className="gift-icon" />

                            <h2>Click To Open</h2>

                            <small>Tap Here 🎁</small>

                        </div>

                    </div>

                ) : (

                    <div className="surprise-card">

                        <FaBirthdayCake className="cake" />

                        <h1>🎂 Happy Birthday Falak ❤️</h1>

                        <p>
                            May Allah bless you with happiness,
                            success, good health, endless smiles
                            and beautiful memories.
                        </p>

                        <h2>You are Amazing ❤️</h2>

                        <button>

                            <FaHeart />

                            <span>Forever Together</span>

                        </button>

                    </div>

                )}

            </div>

        </section>

    );

}