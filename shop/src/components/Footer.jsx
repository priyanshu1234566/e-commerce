import { motion } from "framer-motion";
import "../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="footer"
    >

      <div className="footer-container">

        {/* BRAND */}
        <div>
          <h2>ShopHub</h2>
          <p>
            Modern eCommerce with premium experience.
            Shop smart, fast delivery & best deals.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">

            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p>Email: support@shophub.com</p>
          <p>Phone: +91 00000 00000</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopHub. All rights reserved.
      </div>

    </motion.footer>
  );
}