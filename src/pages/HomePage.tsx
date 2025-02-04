import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StaffingSolutions from '../components/StaffingSolutions';
import Team from '../components/Team';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import About from '../components/About';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <StaffingSolutions />
      <Values />
      <Team />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default HomePage;
