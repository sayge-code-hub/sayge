import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StaffingSolutions from '../components/StaffingSolutions';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sayge",
    "description": "Leading technology company specializing in Flutter, Java, Python, AI, and cloud solutions",
    "url": "https://craftedbyaditya.github.io/sayge/",
    "logo": "https://craftedbyaditya.github.io/sayge/logo.png",
    "sameAs": ["https://www.linkedin.com/company/sayge-it/"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-88585-06876",
      "contactType": "customer service",
      "email": "humans@sayge.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur, Pune, California, Frankfurt"
    }
  };
  return (
    <>
      <SEO
        title="Sayge - Your Technology Partner | Flutter, Java, Python, AI & Cloud Solutions"
        description="Partner with Sayge for innovative digital solutions. We specialize in Flutter, Java, Python, AI, and cloud technologies. Transform your business with our expertise."
        schema={schema}
      />
    <Layout>
      <Hero />
      <About />
      <Services />
      <StaffingSolutions />
      <Values />
      <Testimonials />
    </Layout>
    </>
  );
};

export default HomePage;
