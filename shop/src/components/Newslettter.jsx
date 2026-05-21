import "../styles/newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">

      <h2>📩 Subscribe for Deals</h2>
      <p>Get latest offers & new arrivals updates</p>

      <div className="newsletter-box">
        <input type="email" placeholder="Enter email..." />
        <button>Subscribe</button>
      </div>

    </div>
  );
}