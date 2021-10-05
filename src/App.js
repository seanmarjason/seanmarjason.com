import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Logo from './assets/SMLogo_Black.png'

const navLinks = {
  Home: '#home',
  About: '#about',
  Projects: '#projects',
  Blog: '#blog',
  Contact: '#contact'
}

function App() {
  return (
    <div className="App">
      <Navbar navLinks={navLinks} logo={Logo}/>
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
