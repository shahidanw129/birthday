import "../css/footer.css";
import { FaHeart, FaBirthdayCake, FaStar } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <FaBirthdayCake className="footer-cake" />

                <h2>
                    🎂 Happy Birthday Falak ❤️
                </h2>

                <p className="footer-subtitle">
                    Made with endless love, prayers and beautiful memories.
                </p>

            </div>

            <div className="footer-divider">
                <span></span>
                ❤️
                <span></span>
            </div>

            <div className="footer-content">

                <p>
                    <FaHeart className="footer-icon" />
                    Made With ❤️ By <strong>Shahid</strong>
                </p>

                <p>
                    May Allah always bless you with happiness,
                    good health, success and countless smiles.
                </p>

                <div className="footer-stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

            </div>

            <div className="footer-bottom">
                ❤️ Forever • 2026 • Happy Birthday ❤️
            </div>

        </footer>
    );
}