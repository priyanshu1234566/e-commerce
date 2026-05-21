export default function Services() {
  const services = [
    { title: "Fast Delivery", desc: "Get products in 24-48 hours" },
    { title: "Secure Payment", desc: "100% safe transactions" },
    { title: "24/7 Support", desc: "We are always here for you" },
  ];

  return (
    <div className="p-10 bg-white min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-10">
        ⚙️ Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {services.map((s, i) => (
          <div key={i}
            className="p-6 bg-gray-100 rounded-xl shadow hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2">{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}

      </div>

    </div>
  );
}