import "../css/Memories.css";

export default function Memories() {

    const memories = [

        {
            icon: "🌸",

            title: "The Beginning",

            date: "21 June 2025",

            desc:
                "21 June 2025 woh beautiful day tha jab tum meri zindagi mein aayi. Mujhe nahi pata tha ki tum dheere-dheere meri khushi, meri smile aur meri life ka itna important part ban jaogi. Tumhare aane ke baad meri duniya aur bhi khoobsurat lagne lagi. ❤️",

            shayari:
                "Tum aaye toh zindagi mein ek nayi roshni si aa gayi, har khushi pehle se zyada khoobsurat ho gayi. 🌹"
        },

        {
            icon: "🤝",

            title: "Best Friends",

            date: "July 2025",

            desc:
                "July 2025 mein hum best friends bane. Hamari achhi baatein, hasi-mazaak, daily conversations aur ek doosre ki care ne humein bahut close kar diya. Hamari friendship trust aur understanding se bani ek bahut beautiful bonding hai. 💕",

            shayari:
                "Dosti se shuru hua tha hamara safar, har baat ne humein aur kareeb kar diya. ✨"
        },

        {
            icon: "💖",

            title: "A Beautiful Relationship",

            date: "7 June 2026",

            desc:
                "7 June 2026 meri life ka bahut special day ban gaya, kyunki us din tum meri girlfriend bani. Hamari beautiful friendship ek strong aur lovely relationship mein badal gayi. Hamare beech ka trust, respect, care aur understanding hamare bond ko har din aur mazboot banata hai. 👑",

            shayari:
                "Dosti se shuru hui kahani, mohabbat ka khoobsurat naam ban gayi. ❤️"
        },

        {
            icon: "♾️",

            title: "Every Day Is Special",

            date: "Forever With You",

            desc:
                "Hum abhi tak real life mein nahi mile hain, lekin distance hamare strong relationship ko kam nahi kar sakta. Hamari achhi baatein, care, trust aur ek doosre ko samajhna har din ko special banata hai. Main chahta hoon ki hamara bond hamesha aise hi strong aur beautiful rahe. 🌹",

            shayari:
                "Door hokar bhi tum dil ke paas ho, meri har khushi aur har dua ka ehsaas ho. 💫"
        }

    ];


    return (

        <section className="memories-page">


            {/* Background shapes */}

            <div className="memory-shape shape-one"></div>

            <div className="memory-shape shape-two"></div>

            <div className="memory-shape shape-three"></div>


            {/* Heading */}

            <div className="memories-header">

                <span className="memory-tag">

                    🌹 OUR BEAUTIFUL JOURNEY

                </span>


                <h1>

                    Our Beautiful

                    <span>

                        Memories

                    </span>

                </h1>


                <p>

                    Every date tells a beautiful part of our story,
                    and every day with you gives me a new reason to smile. ❤️

                </p>

            </div>


            {/* Memory cards */}

            <div className="memories-timeline">

                {

                    memories.map((item, index) => (

                        <div
                            className="memory-box"
                            key={index}
                        >


                            <div className="memory-number">

                                0{index + 1}

                            </div>


                            <div className="memory-icon">

                                {item.icon}

                            </div>


                            <div className="memory-content">


                                <span className="memory-label">

                                    A BEAUTIFUL CHAPTER

                                </span>


                                <h2>

                                    {item.title}

                                </h2>


                                <h4>

                                    {item.date}

                                </h4>


                                <div className="memory-divider">

                                    <span></span>

                                    ❤️

                                    <span></span>

                                </div>


                                <p>

                                    {item.desc}

                                </p>


                                <div className="shayari-box">

                                    <span>

                                        🌹

                                    </span>


                                    <em>

                                        {item.shayari}

                                    </em>

                                </div>


                            </div>


                            <div className="card-heart">

                                ❤️

                            </div>


                        </div>

                    ))

                }

            </div>


            {/* Special message */}

            <div className="love-message">

                <div className="love-icon">

                    💌

                </div>


                <span>

                    A MESSAGE FROM MY HEART

                </span>


                <h2>

                    You Made My Life

                    <strong>

                        More Beautiful

                    </strong>

                </h2>


                <p>

                    We may not have met in real life yet,
                    but you have already become one of the
                    most important parts of my life.

                    <br />

                    <br />

                    Tumhari baatein meri smile ka reason hain.
                    Tumhari care mujhe special feel karati hai,
                    aur hamara trust hamare relationship ko
                    har din aur strong banata hai.

                    <br />

                    <br />

                    Hamari story abhi shuru hui hai aur main chahta
                    hoon ki hamare aane wale din bhi isi tarah
                    love, happiness aur beautiful memories se bhare rahein. ❤️

                </p>


                <div className="love-sign">

                    Forever Yours ❤️

                </div>

            </div>


            {/* Footer */}

            <div className="memories-footer">

                <div>

                    ✨ ❤️ ✨

                </div>


                <h2>

                    Our Story Has Just Begun

                </h2>


                <p>

                    21 June 2025 — Forever ♾️

                </p>

            </div>


        </section>

    );

}