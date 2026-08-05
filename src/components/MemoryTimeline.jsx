
import "../css/MemoryTimeline.css";
export default function MemoryTimeline() {

    const memories = [

        {
            icon: "🌸",

            smallTitle: "THE BEGINNING",

            title: "21 June 2025",

            description:
                "21 June 2025 woh khoobsurat din tha jab tum meri zindagi mein aayi. Mujhe nahi pata tha ki ek insaan dheere-dheere meri khushi, meri muskurahat aur meri zindagi ka itna important hissa ban jayega. Tumhare aane ke baad meri normal si duniya bhi bahut khoobsurat lagne lagi. Tumhari baatein, tumhari care aur tumhara saath meri daily happiness ka beautiful reason ban gaya. ❤️",

            shayari:
                "Tum aaye toh zindagi mein ek nayi roshni si aa gayi, har khushi pehle se zyada khoobsurat ho gayi. 🌹",

            special:
                "Tum sirf meri life mein nahi aayi, tum meri life ka sabse beautiful aur important part ban gayi."
        },

        {
            icon: "🤝",

            smallTitle: "BEST FRIENDS",

            title: "July 2025",

            description:
                "July 2025 mein hum best friends bane. Hamari baatein dheere-dheere hamari aadat ban gayi. Har conversation mein ek alag khushi hoti thi, har joke par hasi aati thi aur har chhoti baat ek beautiful memory ban jaati thi. Hum ek doosre ko samajhte, apni feelings share karte aur har situation mein support karte rahe. Hamari friendship ne hamare relationship ki sabse strong foundation banayi. 💕",

            shayari:
                "Dosti se shuru hua tha hamara safar, aaj har baat mein dikhta hai ek doosre ka asar. ✨",

            special:
                "Hamari friendship sirf baaton tak nahi, trust, care, understanding aur ek doosre ko dil se samajhne tak pahunch gayi."
        },

        {
            icon: "💖",

            smallTitle: "A BEAUTIFUL RELATIONSHIP",

            title: "7 June 2026",

            description:
                "7 June 2026 meri zindagi ke sabse special dinon mein se ek ban gaya, kyunki us din tum meri girlfriend bani. Hamari beautiful friendship ek aur khoobsurat relationship mein badal gayi. Hamare beech trust, respect, care aur understanding ne hamare bond ko aur bhi strong bana diya. Tumhare saath har achha moment aur bhi special lagta hai. 👑",

            shayari:
                "Na jaane kaise tum meri har dua ban gayi, dosti se shuru hui kahani meri mohabbat ban gayi. ❤️",

            special:
                "Hamare relationship ki sabse khoobsurat baat yeh hai ki hum sirf ek doosre se pyaar nahi karte, balki ek doosre ko samajhte, respect karte aur support bhi karte hain."
        },

        {
            icon: "✨",

            smallTitle: "EVERY DAY IS SPECIAL",

            title: "Forever With You",

            description:
                "Hum abhi tak real life mein nahi mile hain, lekin distance ne kabhi hamare relationship ko weak nahi kiya. Hamari achhi baatein, daily conversations, care, trust aur ek doosre ke liye time nikalna hamare bond ko har din aur mazboot banata hai. Tumhare saath har normal din bhi special lagta hai. Har message ek smile deta hai aur har conversation ek beautiful memory ban jaati hai. ♾️",

            shayari:
                "Door rehkar bhi tum mere dil ke paas ho, meri har khushi aur har dua ka ehsaas ho. 💫",

            special:
                "Hamari relationship ki strength distance se nahi, hamare trust, understanding, care aur ek doosre ke saath se banti hai. Main chahta hoon ki hamara bond hamesha aise hi strong aur beautiful rahe."
        }

    ];


    return (

        <section className="memories-section">


            {/* Background Design */}

            <div className="memories-background-shape shape-one"></div>

            <div className="memories-background-shape shape-two"></div>

            <div className="memories-background-shape shape-three"></div>


            {/* Heading */}

            <div className="memories-heading">

                <span className="memories-tag">

                    🌹 OUR BEAUTIFUL JOURNEY

                </span>


                <h1>

                    Our Beautiful

                    <span>

                        Memories

                    </span>

                </h1>


                <div className="heading-heart">

                    <span></span>

                    ❤️

                    <span></span>

                </div>


                <p>

                    Our story began on 21 June 2025,
                    our friendship became stronger in July,
                    and every day since then has become more
                    beautiful because you are in my life. ❤️

                </p>

            </div>


            {/* Four Memory Cards */}

            <div className="memories-grid">

                {

                    memories.map((memory, index) => (

                        <div
                            className="memory-card"
                            key={index}
                        >


                            <div className="memory-number">

                                0{index + 1}

                            </div>


                            <div className="memory-icon">

                                {memory.icon}

                            </div>


                            <span className="memory-small-title">

                                {memory.smallTitle}

                            </span>


                            <h2>

                                {memory.title}

                            </h2>


                            <div className="memory-line">

                                <span></span>

                                ❤️

                                <span></span>

                            </div>


                            <p className="memory-description">

                                {memory.description}

                            </p>


                            <div className="memory-shayari">

                                <span>

                                    🌹

                                </span>


                                <p>

                                    {memory.shayari}

                                </p>

                            </div>


                            <div className="memory-special">

                                <b>

                                    ❤️ OUR STRONG BOND

                                </b>


                                <p>

                                    {memory.special}

                                </p>

                            </div>


                            <div className="memory-footer">

                                <span>

                                    A beautiful chapter of our story

                                </span>


                                <b>

                                    ❤️

                                </b>

                            </div>


                            <div className="memory-heart">

                                ❤️

                            </div>


                        </div>

                    ))

                }

            </div>


            {/* Message From Heart */}

            <div className="special-memory-message">

                <div className="special-message-icon">

                    💌

                </div>


                <span className="message-title">

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

                    Your presence makes every day special,
                    every conversation meaningful and every
                    moment worth remembering.

                    <br />

                    <br />

                    Hamari relationship sirf love se nahi,
                    trust, care, respect aur understanding se
                    bhi strong bani hai. Tum meri happiness,
                    meri comfort aur meri har beautiful memory
                    ka important part ho. ❤️

                </p>


                <div className="message-sign">

                    <small>

                        With all my love

                    </small>


                    <b>

                        Forever Yours ❤️

                    </b>

                </div>

            </div>


            {/* Future */}

            <div className="future-memory">

                <div className="future-icon">

                    ♾️

                </div>


                <div className="future-content">

                    <span>

                        OUR BEAUTIFUL FUTURE

                    </span>


                    <h2>

                        The Best Memories

                        <strong>

                            Are Still Waiting

                        </strong>

                    </h2>


                    <p>

                        Hamari story abhi shuru hui hai.
                        Abhi bahut saare dreams poore karne hain,
                        bahut saari baatein karni hain aur bahut
                        saari beautiful memories create karni hain.

                        <br />

                        <br />

                        Main chahta hoon ki ek din hum real life
                        mein milein, saath time spend karein,
                        photos lein aur har special moment ko
                        ek beautiful memory bana dein. 🌹

                    </p>


                    <div className="future-points">

                        <div>

                            <b>

                                🌍

                            </b>


                            <span>

                                One day meeting each other

                            </span>

                        </div>


                        <div>

                            <b>

                                📸

                            </b>


                            <span>

                                Creating beautiful real memories

                            </span>

                        </div>


                        <div>

                            <b>

                                🎂

                            </b>


                            <span>

                                Celebrating many birthdays together

                            </span>

                        </div>


                        <div>

                            <b>

                                ❤️

                            </b>


                            <span>

                                Staying together through every chapter

                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* Final Footer */}

            <div className="memories-footer">

                <div className="footer-hearts">

                    ✨ ❤️ ✨

                </div>


                <h2>

                    Our Story Has Just Begun

                </h2>


                <p>

                    Har din tumhare saath ek nayi memory hai,
                    har baat ek nayi khushi hai aur har moment
                    hamari beautiful story ka ek special page hai.

                    <br />

                    <br />

                    I hope our relationship always remains
                    strong, beautiful and full of love. 🌹

                </p>


                <span>

                    21 June 2025 — Forever ♾️

                </span>

            </div>

        </section>

    );

}