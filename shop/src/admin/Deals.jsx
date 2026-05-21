export default function Deals() {
  const deals = [
    { id: 1, title: "50% OFF Shoes" },
    { id: 2, title: "Buy 1 Get 1 Free" },
    { id: 3, title: "Flat ₹500 OFF" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-blue-50 p-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        🔥 Top Deals Control
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {deals.map((d) => (
          <div
            key={d.id}
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition text-center"
          >
            <h2 className="font-bold text-lg">{d.title}</h2>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Activate
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}