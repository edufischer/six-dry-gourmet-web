
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Sustainability from '../components/Sustainability';
import HowToOrder from '../components/HowToOrder';
import Location from '../components/Location';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 relative">
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Products />
        <Sustainability />
        <HowToOrder />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
