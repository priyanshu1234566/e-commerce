import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}