import "../css/gallery.css";

export default function Gallery() {

    const photos = [

        {
            img: "src/components/6311860629874087152_121.jpg",
            title: "Beautiful Smile ❤️",
            desc: "Your smile makes every day special."
        },

        {
            img: "src/components/6311860629874087154_121.jpg",
            title: "Birthday Princess 👑",
            desc: "The most beautiful girl in my life."
        },

        {
            img: "src/components/6311860629874087155_121.jpg",
            title: "Cute Memories 💕",
            desc: "Every memory with you is priceless."
        },

        {
            img: "src/components/6311860629874087156_121.jpg",
            title: "Forever Together 🌹",
            desc: "Our journey will always be beautiful."
        },

        {
            img: "src/components/6311860629874087158_121.jpg",
            title: "Lovely Moments ✨",
            desc: "Every picture tells a love story."
        },

        {
            img: "src/components/6311860629874087160_121.jpg",
            title: "Queen Falak ❤️",
            desc: "You deserve all the happiness."
        },

        {
            img: "src/components/6311860629874087163_121.jpg",
            title: "Birthday Celebration 🎂",
            desc: "May every wish come true."
        },

        {
            img: "src/components/6311860629874087151_121.jpg",
            title: "Always Mine 💖",
            desc: "Forever together, forever happy."
        }

    ];

    return (

        <section className="gallery-section">

            <div className="title">

                <h1>📸 Our Beautiful Gallery</h1>

                <p>

                    Every picture tells a beautiful story of happiness,
                    friendship and unforgettable memories.

                </p>

            </div>

            <div className="gallery-grid">

                {

                    photos.map((item, index) => (

                        <div
                            className="gallery-card"
                            key={index}
                        >

                            <img
                                src={item.img}
                                alt={item.title}
                            />

                            <div className="overlay">

                                <h2>{item.title}</h2>

                                <p>{item.desc}</p>

                                <button>

                                    ❤️ View Memory

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}