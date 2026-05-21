import { useState } from "react";
import "../styles/AddProduct.css";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    discountPrice: "",
    description: "",
    category: "normal",
    images: [""],
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...form.images];
    newImages[index] = value;
    setForm({ ...form, images: newImages });
  };

  const addImageField = () => {
    setForm({ ...form, images: [...form.images, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", form);
    alert("Product Added Successfully 🚀");
  };

  return (
    <div className="add-product-container">

      <form className="add-product-form" onSubmit={handleSubmit}>

        <h2 className="add-product-title">➕ Add New Product</h2>

        {/* NAME */}
        <input
          name="name"
          className="add-product-input"
          placeholder="Product Name"
          onChange={handleChange}
        />

        {/* PRICE */}
        <input
          name="price"
          type="number"
          className="add-product-input"
          placeholder="Original Price"
          onChange={handleChange}
        />

        {/* DISCOUNT PRICE */}
        <input
          name="discountPrice"
          type="number"
          className="add-product-input"
          placeholder="Discount Price"
          onChange={handleChange}
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          className="add-product-textarea"
          placeholder="Product Description"
          onChange={handleChange}
        />

        {/* CATEGORY */}
        <select
          name="category"
          className="add-product-select"
          onChange={handleChange}
        >
          <option value="normal">Normal</option>
          <option value="deal">Top Deal</option>
          <option value="new">New Arrival</option>
        </select>

        {/* STOCK */}
        <input
          name="stock"
          type="number"
          className="add-product-input"
          placeholder="Stock Quantity"
          onChange={handleChange}
        />

        {/* IMAGES */}
        <div className="image-section">
          <label>Product Images</label>

          {form.images.map((img, index) => (
            <input
              key={index}
              className="add-product-input"
              placeholder={`Image URL ${index + 1}`}
              value={img}
              onChange={(e) =>
                handleImageChange(index, e.target.value)
              }
            />
          ))}

          <button
            type="button"
            className="add-image-btn"
            onClick={addImageField}
          >
            ➕ Add More Image
          </button>
        </div><br></br>

        {/* SUBMIT */}
        <button className="add-product-btn" type="submit">
          🚀 Add Product
        </button>

      </form>

    </div>
  );
}