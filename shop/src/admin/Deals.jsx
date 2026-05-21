import { useState } from "react";
import "../styles/Deals.css";

export default function Deals() {
  const [deals, setDeals] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    discountPrice: "",
    description: "",
    discount: "",
    endDate: "",
    image: "",
    active: true,
  });

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ADD DEAL
  const addDeal = (e) => {
    e.preventDefault();

    const newDeal = {
      ...form,
      id: Date.now(),
    };

    setDeals([...deals, newDeal]);

    // reset form
    setForm({
      title: "",
      price: "",
      discountPrice: "",
      description: "",
      discount: "",
      endDate: "",
      image: "",
      active: true,
    });
  };

  // TOGGLE ACTIVE
  const toggleDeal = (id) => {
    setDeals(
      deals.map((d) =>
        d.id === id ? { ...d, active: !d.active } : d
      )
    );
  };

  // DELETE DEAL
  const deleteDeal = (id) => {
    setDeals(deals.filter((d) => d.id !== id));
  };

  return (
    <div className="deals-container">

      <h1 className="deals-title">🔥 Deals Admin Panel</h1>

      {/* ================= ADD DEAL FORM ================= */}
      <form className="deal-form" onSubmit={addDeal}>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Discount Price"
          value={form.discountPrice}
          onChange={(e) =>
            setForm({ ...form, discountPrice: e.target.value })
          }
        />

        <input
          placeholder="Discount %"
          value={form.discount}
          onChange={(e) =>
            setForm({ ...form, discount: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="date"
          value={form.endDate}
          onChange={(e) =>
            setForm({ ...form, endDate: e.target.value })
          }
        />

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <button type="submit">➕ Add Deal</button>

      </form>

      {/* ================= DEAL LIST ================= */}
      <div className="deals-grid">

        {deals.map((d) => (
          <div key={d.id} className="deal-card">

            {d.image && <img src={d.image} alt={d.title} />}

            <h2>{d.title}</h2>
            <p>{d.description}</p>

            <div className="price-box">
              <span className="old">₹{d.price}</span>
              <span className="new">₹{d.discountPrice}</span>
            </div>

            <p className="discount">{d.discount}% OFF</p>

            <p className="expiry">Ends: {d.endDate}</p>

            <div className="btn-group">

              <button
                onClick={() => toggleDeal(d.id)}
                className={d.active ? "active-btn" : "inactive-btn"}
              >
                {d.active ? "Active" : "Inactive"}
              </button>

              <button
                onClick={() => deleteDeal(d.id)}
                className="delete-btn"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}