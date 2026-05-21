import { useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Shoes", price: 999 },
    { id: 2, name: "Watch", price: 1999 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        🛠 Manage Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition"
          >

            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-gray-500">₹ {p.price}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}