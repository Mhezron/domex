import './App.css';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import BlogGrid from './Components/BlogGrid';
import Footer from './Components/Footer';
import Navbar from './Components/Navabar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <BlogGrid />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
