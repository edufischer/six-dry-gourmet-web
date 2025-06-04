
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Sustainability from '../components/Sustainability';
import HowToOrder from '../components/HowToOrder';
import Location from '../components/Location';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import RevealAnimation from '../components/RevealAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <RevealAnimation direction="up" delay={0.2}>
        <About />
      </RevealAnimation>
      <RevealAnimation direction="left" delay={0.1}>
        <Products />
      </RevealAnimation>
      <RevealAnimation direction="right" delay={0.1}>
        <Sustainability />
      </RevealAnimation>
      <RevealAnimation direction="up" delay={0.2}>
        <HowToOrder />
      </RevealAnimation>
      <RevealAnimation direction="left" delay={0.1}>
        <Location />
      </RevealAnimation>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
