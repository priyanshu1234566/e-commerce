import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "New Product",
      price: 999
    };

    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-center">
        ⚙️ Admin Panel
      </h1>

      <button
        onClick={addProduct}
        className="bg-green-500 text-white px-4 py-2 rounded mb-6 hover:scale-105 transition"
      >
        + Add Product
      </button>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div key={p.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold">{p.name}</h3>
            <p>₹ {p.price}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}