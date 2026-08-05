import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import MemoryTimeline from "../components/MemoryTimeline";
import Quotes from "../components/Quotes";
import Letter from "../components/Letter";
import GiftBox from "../components/GiftBox";
import Fireworks from "../components/Fireworks";
import Hearts from "../components/Hearts";
import Footer from "../components/Footer";

import "../css/dashboard.css";

export default function Dashboard() {

    return (

        <>

            <Hearts />

            <Fireworks />

            <div className="dashboard">

                <Sidebar />

                <div className="main">

                    <Navbar />

                    <Hero />

                    <div className="cards">

                        <div className="card">

                            <h2>❤️ Love</h2>

                            <h1>Infinite</h1>

                            <p>
                                Forever Together ❤️
                            </p>

                        </div>

                        <div className="card">

                            <h2>🎁 Gifts</h2>

                            <h1>07</h1>

                            <p>
                                Special Birthday Surprises
                            </p>

                        </div>

                        <div className="card">

                            <h2>📸 Memories</h2>

                            <h1>250+</h1>

                            <p>
                                Beautiful Moments Together
                            </p>

                        </div>

                        <div className="card">

                            <h2>💌 Wishes</h2>

                            <h1>Forever</h1>

                            <p>
                                Endless Happiness & Love
                            </p>

                        </div>

                    </div>

                    <Countdown />

                    <Gallery />

                    <MemoryTimeline />

                    <Quotes />

                    <Letter />

                    <GiftBox />

                    <Footer />

                </div>

            </div>

        </>

    );

}