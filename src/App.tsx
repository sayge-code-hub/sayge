import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/sayge" element={<HomePage />} />
          <Route path="/sayge/careers" element={<CareersPage />} />
          <Route path="/sayge/contact" element={<ContactPage />} />
          <Route path="/sayge/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;