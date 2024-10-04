import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import BlogGrid from './Components/BlogGrid';
import Footer from './Components/Footer';
import Navbar from './Components/Navabar';
import Team from './Components/Team';
import ArticlePage from './Pages/ArticlePage'; 
import ForexRates from './Components/ForexRates';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ForexRates />

        <Routes>
          <Route path="/news" element={<ArticlePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/forex" element={<ForexPage />} />
          <Route path="/tools" element={<ToolsPage />} /> */}
        </Routes>
        {/* <Banner /> */}
        {/* <CurrencyConverter /> */}
        <BlogGrid />
        <Team />
        <Blog />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
