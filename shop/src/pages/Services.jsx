import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      desc: "Get products delivered within 24–48 hours with tracking support",
    },
    {
      title: "Secure Payment",
      desc: "100% encrypted and safe payment gateway for all transactions",
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available to help you anytime",
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free return & refund policy within few clicks",
    },
    {
      title: "Best Deals",
      desc: "Exclusive discounts and offers on trending products",
    },
    {
      title: "Premium Quality",
      desc: "Only verified and high-quality products listed",
    },
  ];

  return (
    <div className="services-page">

      {/* HEADER (optional hero strip) */}
      <Header />

      {/* NAVBAR */}
      <Navbar />


      {/* MAIN CONTENT */}
      <div className="services-container">

        <div className="services-header">
          <h1>⚙️ Our Services</h1>
          <p>We provide premium eCommerce experience for smart shopping</p>
        </div>

        <div className="services-grid">

          {services.map((s, i) => (
            <div key={i} className="service-card">
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </div>
          ))}

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}