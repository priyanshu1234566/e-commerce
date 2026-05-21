export default function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        <p className="text-gray-500 text-sm mt-1">
          Best quality product
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold">
            ₹ {product.price}
          </span>

          <button
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}