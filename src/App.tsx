import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GalleryPage } from './pages/GalleryPage';
import Index from './pages/Index'; // or './pages/index' depending on your structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
