import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sayge" element={<HomePage />} />
        <Route path="/sayge/careers" element={<CareersPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;