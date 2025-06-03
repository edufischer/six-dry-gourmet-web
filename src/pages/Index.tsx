
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Sustainability from '../components/Sustainability';
import HowToOrder from '../components/HowToOrder';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Products />
      <Sustainability />
      <HowToOrder />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
