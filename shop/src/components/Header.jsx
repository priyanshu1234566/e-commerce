export default function Header() {
  return (
    <header className="h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Build Your Online Store
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Modern eCommerce website with product management, admin panel,
          and clean UI design.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
          Shop Now
        </button>
      </div>

    </header>
  );
}