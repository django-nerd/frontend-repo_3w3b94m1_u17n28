import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-900">
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
