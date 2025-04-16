// default font family
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Join from './pages/Join';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
