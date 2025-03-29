export default function NearbyParking() {
    return (
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">NEARBY PARKING</h2>
        <p className="mb-8 text-lg">Use this map to find public parking garages and lots near James Madison Park.</p>
  
        <div className="w-full max-w-5xl mx-auto aspect-[4/3] border-2 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1HeS7Itl53HnjQLrC_0XVWzAke7eEneTE&ehbc=2E312F"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Madison Parking Map"
          ></iframe>
        </div>
      </section>
    );
  }
  