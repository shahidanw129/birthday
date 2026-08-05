import "../css/aboutFalak.css";

export default function AboutFalak() {

    const qualities = [

        {
            icon: "😊",
            title: "Her Beautiful Smile",
            text: "Uski smile sirf ek smile nahi hai. Kabhi kabhi ek chhoti si smile bhi pura din beautiful bana deti hai. Uska khush rehna mere liye sabse important hai."
        },

        {
            icon: "💬",
            title: "Our Long Conversations",
            text: "Hamari baate kabhi khatam nahi hoti. Chhoti chhoti baate, funny moments, serious discussions aur future ke dreams hamare relationship ko aur strong banate hain."
        },

        {
            icon: "🤝",
            title: "A Strong Friendship",
            text: "Hamare relationship ki sabse beautiful baat ye hai ki hum sirf couple nahi, ek dusre ke best friends bhi hain. Hum ek dusre ko sunte hain, samajhte hain aur support karte hain."
        },

        {
            icon: "❤️",
            title: "A Beautiful Relationship",
            text: "Relationship perfect nahi hota. Kabhi misunderstanding hoti hai, kabhi mood kharab hota hai aur kabhi chhoti baat par narazgi bhi hoti hai. Lekin pyaar aur understanding hamesha wapas ek saath le aati hai."
        },

        {
            icon: "🫂",
            title: "Forgiveness",
            text: "Galti kisi se bhi ho sakti hai. Important ye hai ki hum apni galti samjhein, dil se sorry bolein aur ek dusre ko maaf karna seekhein. Maafi relationship ko kamzor nahi, aur mazboot banati hai."
        },

        {
            icon: "✨",
            title: "Every Day Is Special",
            text: "Hamare liye special hone ke liye kisi festival ya special date ki zarurat nahi. Jab hum baat karte hain, ek dusre ko smile karwate hain aur apna time share karte hain, tab har din special ban jata hai."
        }

    ];

    return (

        <div className="about-page">

            <div className="about-background">

                <div className="about-circle circle-one"></div>

                <div className="about-circle circle-two"></div>

                <div className="about-circle circle-three"></div>

                <div className="about-heart heart-one">❤️</div>

                <div className="about-heart heart-two">💕</div>

                <div className="about-heart heart-three">💖</div>

            </div>


            <section className="about-hero">

                <div className="about-image-box">

                    <div className="image-glow"></div>

                    <img
                        src="src/pages/6311860629874087195_121.jpg"
                        alt="Falak"
                    />

                    <div className="image-badge">

                        👑 My Favorite Person

                    </div>

                </div>


                <div className="about-intro">

                    <span className="about-tag">

                        🌹 A BEAUTIFUL PERSON

                    </span>

                    <h1>

                        About <span>Falak</span> ❤️

                    </h1>

                    <h2>

                        More Than A Girlfriend,
                        My Best Friend Too

                    </h2>

                    <p>

                        Falak meri life ka ek bahut beautiful part hai.
                        Uske aane ke baad meri life me bahut si khushiyan,
                        smiles aur beautiful feelings add hui hain.

                    </p>

                    <p>

                        Hamari story sirf love ki story nahi hai.
                        Hamari story friendship, trust, understanding,
                        support aur ek dusre ke saath khade rehne ki story hai.

                    </p>

                    <div className="about-buttons">

                        <a href="#our-story">

                            ❤️ Our Story

                        </a>

                        <a href="#promise">

                            💌 Our Promise

                        </a>

                    </div>

                </div>

            </section>


            <section
                className="story-section"
                id="our-story"
            >

                <div className="section-heading">
                    <div className="story-photo">
    <img src="src/pages/6311860629874087245_120.jpg" alt="" />
</div>

                    <span>

                        💕 OUR JOURNEY

                    </span>

                    <h2>

                        Our Beautiful Story

                    </h2>

                    <p>

                        Har relationship ki apni story hoti hai,
                        aur hamari story har din aur beautiful ban rahi hai.

                    </p>

                </div>


                <div className="story-content">

                    <div className="story-card">

                        <div className="story-icon">

                            🌸

                        </div>

                        <h3>

                            The Beginning

                        </h3>

                        <p>

                            21 June 2025 se meri life me ek beautiful
                            change aaya. Ek person dheere dheere meri
                            happiness ka important part ban gaya.

                        </p>

                    </div>


                    <div className="story-card">

                        <div className="story-icon">

                            🤝

                        </div>

                        <h3>

                            Best Friends

                        </h3>

                        <p>

                            July 2025 me hamari friendship aur strong hui.
                            Hamari conversations, jokes aur daily talks ne
                            hume ek dusre ke bahut close kar diya.

                        </p>

                    </div>


                    <div className="story-card">

                        <div className="story-icon">

                            💖

                        </div>

                        <h3>

                            A Beautiful Relationship

                        </h3>

                        <p>

                            7 June 2026 hamari story ka ek bahut special
                            day bana. Friendship ke saath love aur trust
                            ka ek beautiful relationship bhi jud gaya.

                        </p>

                    </div>


                    <div className="story-card">

                        <div className="story-icon">

                            ♾️

                        </div>

                        <h3>

                            Forever Together

                        </h3>

                        <p>

                            Hamari story abhi khatam nahi hui.
                            Ye har conversation, har smile aur har
                            beautiful memory ke saath likhi ja rahi hai.

                        </p>

                    </div>

                </div>

            </section>


            <section className="qualities-section">
                <div className="quality-photo">
    <img src="src/pages/6311860629874087246_120.jpg" alt="" />
</div>

                <div className="section-heading">

                    <span>

                        ✨ WHAT MAKES US SPECIAL

                    </span>

                    <h2>

                        The Beautiful Things About Us

                    </h2>

                    <p>

                        Hamari relationship ki strength sirf love nahi,
                        balki friendship, trust aur understanding bhi hai.

                    </p>

                </div>


                <div className="qualities-grid">

                    {

                        qualities.map((item, index) => (

                            <div
                                className="quality-card"
                                key={index}
                            >

                                <div className="quality-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.text}

                                </p>

                                <div className="quality-line"></div>

                            </div>

                        ))

                    }

                </div>

            </section>


            <section className="relationship-section">

<div className="relationship-photo">
    <img src="src/pages/6311860629874087247_121.jpg" alt="" />
</div>
                <div className="relationship-left">


                    <span>

                        🫂 UNDERSTANDING

                    </span>

                    <h2>

                        Kabhi Narazgi,
                        Lekin Saath Hamesha ❤️

                    </h2>

                    <p>

                        Har relationship me kabhi na kabhi misunderstanding
                        hoti hai. Kabhi kisi baat ka bura lag jata hai,
                        kabhi reply late aata hai aur kabhi chhoti si baat
                        bhi badi lagne lagti hai.

                    </p>

                    <p>

                        Lekin hamari relationship ki sabse achhi baat ye hai
                        ki hum problems se bhaagte nahi. Hum baat karte hain,
                        ek dusre ko samajhne ki koshish karte hain aur
                        relationship ko pehle rakhte hain.

                    </p>

                    <p>

                        Galti dono taraf se ho sakti hai. Isliye zaroori nahi
                        ki hamesha kaun sahi aur kaun galat hai. Zaroori ye hai
                        ki hum ek dusre ke emotions samjhein aur dil se
                        ek dusre ko maaf kar sakein.

                    </p>

                </div>


                <div className="relationship-right">

                    <div className="quote-box">

                        <span>

                            “

                        </span>

                        <p>

                            Rishta wahi beautiful hota hai
                            jahan narazgi ke baad bhi
                            ek dusre ko chhodne ka nahi,
                            samajhne ka khayal aaye.

                        </p>

                        <h4>

                            Shahid ❤️ Falak

                        </h4>

                    </div>

                </div>

            </section>


            <section
                className="shayari-section"
                id="promise"
            >
                <div className="shayari-photo">
    <img src="src/pages/6311860629874087187_121.jpg" alt="" />
</div>

                <div className="shayari-card">

                    <span className="shayari-top">

                        🌹 A MESSAGE FROM MY HEART

                    </span>

                    <h2>

                        Falak Ke Naam ❤️

                    </h2>

                    <p>

                        “Tumse baat hoti hai to din beautiful lagta hai,<br />

                        Tumhari smile se har moment special lagta hai,<br />

                        Kabhi chhoti si narazgi ho bhi jaye agar,<br />

                        To tumhe manana bhi mujhe apna haq lagta hai.”

                    </p>

                    <p>

                        “Galti ho to ek dusre ko samjhayenge,<br />

                        Naraz honge to baat karke manayenge,<br />

                        Har mushkil me ek dusre ka saath denge,<br />

                        Aur apni beautiful story ko hamesha
                        pyaar se sajayenge.” ❤️

                    </p>

                </div>

            </section>


            <section className="promise-section">

                <div className="promise-header">
                    <div className="promise-photo">
    <img src="src/pages/6311860629874087188_121.jpg" alt="" />
</div>

                    <span>

                        💌 OUR PROMISE

                    </span>

                    <h2>

                        A Promise For Our Relationship

                    </h2>

                </div>


                <div className="promise-list">

                    <div>

                        <span>

                            01

                        </span>

                        <p>

                            Main hamesha tumhari respect karunga
                            aur tumhari feelings ko important samjhunga.

                        </p>

                    </div>


                    <div>

                        <span>

                            02

                        </span>

                        <p>

                            Har difficult time me tumhara support
                            karunga aur tumhe kabhi akela feel nahi
                            hone dunga.

                        </p>

                    </div>


                    <div>

                        <span>

                            03

                        </span>

                        <p>

                            Agar kabhi galti ho jaye to ego se pehle
                            hamare relationship ko rakhunga.

                        </p>

                    </div>


                    <div>

                        <span>

                            04

                        </span>

                        <p>

                            Hamari friendship, trust aur love ko
                            har din aur strong banane ki koshish karunga.

                        </p>

                    </div>

                </div>

            </section>


            <section className="about-ending">

                <div className="ending-heart">
<div className="ending-photo">
    <img src="src/pages/6311860629874087189_121.jpg" alt="" />
</div>
                    ❤️

                </div>

                <h2>

                    Our Story Is Still Being Written...

                </h2>

                <p>

                    Har din ek nayi memory,
                    har conversation ek nayi smile,
                    aur har moment hamari story ka
                    ek beautiful chapter hai.

                </p>

                <h3>

                    Forever With You, Falak ❤️

                </h3>

                <span>

                    — Shahid

                </span>

            </section>

        </div>

    );

}