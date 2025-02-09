import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/sayge" element={<HomePage />} />
          <Route path="/sayge/careers" element={<CareersPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;