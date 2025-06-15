
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Shop from '../components/Shop';
import Sustainability from '../components/Sustainability';
import HowToOrder from '../components/HowToOrder';
import Location from '../components/Location';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import RevealAnimation from '../components/RevealAnimation';
import LoadingScreen from '../components/LoadingScreen';
import MeatQuality from '../components/MeatQuality';
import Industry from '../components/Industry';
import Partners from '../components/Partners';
import { usePreloader } from '../hooks/usePreloader';

const Index = () => {
  const { isLoading, progress } = usePreloader();

  return (
    <div className="min-h-screen bg-zinc-950">
      <LoadingScreen isLoading={isLoading} progress={progress} />
      
      {!isLoading && (
        <>
          <AnimatedBackground />
          <ScrollProgress />
          <Header />
          <Hero />
          <RevealAnimation direction="up" delay={0.2}>
            <About />
          </RevealAnimation>
          <RevealAnimation direction="left" delay={0.1}>
            <Shop />
          </RevealAnimation>
          <RevealAnimation direction="right" delay={0.1}>
            <MeatQuality />
          </RevealAnimation>
          <RevealAnimation direction="left" delay={0.1}>
            <Industry />
          </RevealAnimation>
          <RevealAnimation direction="right" delay={0.1}>
            <Products />
          </RevealAnimation>
          <RevealAnimation direction="left" delay={0.1}>
            <Sustainability />
          </RevealAnimation>
          <RevealAnimation direction="up" delay={0.2}>
            <HowToOrder />
          </RevealAnimation>
          <RevealAnimation direction="right" delay={0.1}>
            <Partners />
          </RevealAnimation>
          <RevealAnimation direction="left" delay={0.1}>
            <Location />
          </RevealAnimation>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default Index;
