// components/Location.jsx
export default function Location() {
  return (
    <section id="location" className="py-16 px-6 bg-white text-center">
      <h2 className="text-5xl font-bold mb-6 text-gray-900">LOCATION</h2>
      <p className="mb-8 text-lg">James Madison Park, 614 E Gorham St, Madison, WI</p>
      <iframe
        className="w-full max-w-3xl mx-auto h-64 border-2"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=James+Madison+Park,+Madison,+WI&output=embed"
      ></iframe>
    </section>
  );
}
