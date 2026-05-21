import { useEffect, useState } from "react";
import "../styles/Banner.css";

const banners = [
  {
    title: "🔥 Mega Sale - Up to 70% OFF",
    desc: "Best deals on fashion & electronics",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    title: "✨ New Arrivals",
    desc: "Fresh collection just dropped",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "⚡ Flash Deals",
    desc: "Limited time offers, grab now",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">

      {banners.map((b, i) => (
        <div
          key={i}
          className={`banner-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${b.img})` }}
        >
          <div className="banner-overlay">
            <h1>{b.title}</h1>
            <p>{b.desc}</p>
            <button>Shop Now</button>
          </div>
        </div>
      ))}

      <div className="banner-dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}