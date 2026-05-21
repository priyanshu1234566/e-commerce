import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">

      <Navbar />

      <Header />

      {/* Featured Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          🔥 Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3].map((item) => (
            <div key={item}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
              <h3 className="font-semibold">Product {item}</h3>
              <p className="text-gray-500">Best quality product</p>
            </div>
          ))}

        </div>
      </section>

      <Footer />

    </div>
  );
}