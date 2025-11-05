export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604654894610-73a08b4a2c2e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616394584738-94f59cd1870a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604881991720-f91add48a5f3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616394584613-63a0cb4224c5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604908177085-275a3b8573ab?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h2>
            <p className="mt-2 text-gray-600">A glimpse into our minimal, floral-inspired looks.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#8b0000' }}>
            Book Now
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-sm bg-white">
              <img src={src} alt="nail art" className="h-44 md:h-56 w-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
