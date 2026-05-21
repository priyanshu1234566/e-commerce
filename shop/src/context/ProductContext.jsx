import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Shoes",
      price: 1999,
      image: "https://via.placeholder.com/200",
      category: "deal",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "https://via.placeholder.com/200",
      category: "new",
    },
  ]);

  // ➕ ADD PRODUCT
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // ❌ DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // ✏️ UPDATE PRODUCT PRICE
  const updatePrice = (id, newPrice) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, price: newPrice } : p
      )
    );
  };

  // 📉 SORT LOW TO HIGH
  const sortLowToHigh = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };

  // 📈 SORT HIGH TO LOW
  const sortHighToLow = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };

  // 🆕 FILTER NEW ARRIVALS
  const newArrivals = products.filter((p) => p.category === "new");

  // 🔥 FILTER DEALS
  const deals = products.filter((p) => p.category === "deal");

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updatePrice,
        sortLowToHigh,
        sortHighToLow,
        newArrivals,
        deals,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}