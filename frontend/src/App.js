import './App.css';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import BlogGrid from './Components/BlogGrid';
import Footer from './Components/Footer';
import Navbar from './Components/Navabar';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <BlogGrid />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
