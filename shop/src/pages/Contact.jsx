export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fadeIn">

        <h1 className="text-2xl font-bold text-center mb-6">
          📞 Contact Us
        </h1>

        <input
          className="w-full p-3 border rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Your Name"
        />

        <input
          className="w-full p-3 border rounded mb-3"
          placeholder="Email"
        />

        <textarea
          className="w-full p-3 border rounded mb-3"
          placeholder="Message"
        ></textarea>

        <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
          Send Message
        </button>

      </div>

    </div>
  );
}