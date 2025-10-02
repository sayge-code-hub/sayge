import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import OurWork from './pages/OurWork';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/sayge" element={<HomePage />} />
          <Route path="/sayge/careers" element={<CareersPage />} />
          <Route path="/sayge/contact" element={<ContactPage />} />
          <Route path="/sayge/blog" element={<BlogPage />} />
          <Route path="/sayge/our-work" element={<OurWork />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;