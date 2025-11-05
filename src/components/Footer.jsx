export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold" style={{ color: '#8b0000' }}>Hana Nails Bali</h3>
          <p className="mt-2 text-gray-600">
            Serene, minimalist Japanese nail artistry in the heart of Bali.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Visit</h4>
          <p className="mt-2 text-gray-700">Canggu, Bali, Indonesia</p>
          <p className="text-gray-700">Open Tue–Sun · 10:00–19:00</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Book</h4>
          <a href="mailto:hello@hananailsbali.com" className="block mt-2 underline" style={{ color: '#8b0000' }}>
            hello@hananailsbali.com
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="block mt-1 underline" style={{ color: '#8b0000' }}>
            WhatsApp +62 812-3456-7890
          </a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Hana Nails Bali · All rights reserved</div>
    </footer>
  );
}
