export default function NewArrivals() {
  const items = [
    { id: 1, name: "Smart Watch", price: 2999 },
    { id: 2, name: "Sneakers", price: 1999 },
    { id: 3, name: "Headphones", price: 1499 },
  ];

  return (
    <div className="min-h-screen bg-white p-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        🆕 New Arrivals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((i) => (
          <div
            key={i.id}
            className="border rounded-xl p-5 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="h-40 bg-gray-100 rounded mb-4 animate-pulse"></div>

            <h2 className="font-bold">{i.name}</h2>
            <p className="text-blue-600 font-semibold">₹ {i.price}</p>

          </div>
        ))}

      </div>

    </div>
  );
}