import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products] = useState([
    { id: 1, name: "Shoes", price: 999, image: "https://via.placeholder.com/300" },
    { id: 2, name: "Watch", price: 1999, image: "https://via.placeholder.com/300" },
    { id: 3, name: "Bag", price: 1499, image: "https://via.placeholder.com/300" },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-8">
        🛒 All Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div key={p.id}
            className="transform hover:scale-105 transition duration-300"
          >
            <ProductCard product={p} />
          </div>
        ))}

      </div>

    </div>
  );
}