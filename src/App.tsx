import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Trust />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
