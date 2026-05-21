import { useState } from "react";
import "../styles/AddProduct.css";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "normal",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", form);
    alert("Product Added Successfully 🚀");
  };

  return (
    <div className="add-product-container">

      <form className="add-product-form" onSubmit={handleSubmit}>

        <h2 className="add-product-title">
          ➕ Add Product
        </h2>

        <input
          className="add-product-input"
          placeholder="Product Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="add-product-input"
          placeholder="Price"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="add-product-input"
          placeholder="Image URL"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <select
          className="add-product-select"
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="normal">Normal</option>
          <option value="deal">Top Deal</option>
          <option value="new">New Arrival</option>
        </select>

        <button className="add-product-btn" type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}