import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import OurWork from './pages/OurWork';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;