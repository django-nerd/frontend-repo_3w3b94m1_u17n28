import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden bg-pink-50">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-50/80 via-pink-50/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col">
        {/* Simple top nav */}
        <div className="pt-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-semibold tracking-wide" style={{ color: '#8b0000' }}>
            Hana Nails Bali
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80" style={{ color: '#8b0000' }}>Services</a>
            <a href="#gallery" className="hover:opacity-80" style={{ color: '#8b0000' }}>Gallery</a>
            <a href="#contact" className="hover:opacity-80" style={{ color: '#8b0000' }}>Contact</a>
          </nav>
        </div>

        <div className="flex-1 grid md:grid-cols-2 items-center">
          <div className="backdrop-blur-[1px] p-6 md:p-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Japanese Nail Art
              <span className="block" style={{ color: '#8b0000' }}>in Bali</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg max-w-prose">
              Minimal, refined, and meticulously hand-crafted designs inspired by modern Japan. Enjoy a serene studio experience in the heart of Bali.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#services"
                className="px-5 py-3 rounded-md text-white shadow-md"
                style={{ backgroundColor: '#8b0000' }}
              >
                View Services
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-md border"
                style={{ borderColor: '#8b0000', color: '#8b0000' }}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
