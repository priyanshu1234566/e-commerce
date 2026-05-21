import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="hero">

      {/* LEFT SOCIAL */}
      <div className="hero-left-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      {/* CENTER CONTENT */}
      <div className="hero-center">

        <h1>WELCOME</h1>

        <p>
          Discount offers available — shop now and get best deals on trending products
        </p>

      </div>

      {/* RIGHT CTA */}
      <div className="hero-right">
        <button>Shop Now</button>
      </div>

    </header>
  );
}