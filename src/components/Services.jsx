export default function Services() {
  const services = [
    {
      title: 'Gel Manicure',
      desc: 'Classic Japanese gel with pristine cuticle care and a glassy finish.',
      price: 'IDR 350k',
    },
    {
      title: 'Art Set',
      desc: 'Minimal line work, micro florals, or abstract gradients in dark red hues.',
      price: 'IDR 500k',
    },
    {
      title: 'Sculpted Extensions',
      desc: 'Lightweight and durable extensions shaped to perfection.',
      price: 'IDR 700k',
    },
    {
      title: 'Repair & Care',
      desc: 'Strengthening treatments and restorative spa care for nail health.',
      price: 'IDR 250k',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-2 text-gray-600">Curated techniques with a focus on precision and comfort.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border p-6 bg-pink-50/40">
              <h3 className="text-xl font-semibold" style={{ color: '#8b0000' }}>{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
              <div className="mt-4 font-medium" style={{ color: '#8b0000' }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
