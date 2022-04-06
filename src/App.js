import './App.css';
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
// import Projects from './pages/Projects'
// import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Logo from './assets/SMLogo_Black.png'
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar'


const navLinks = {
  Home: '#home',
  About: '#about',
  // Projects: '#projects',
  // Blog: '#blog',
  Contact: '#contact'
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Navbar navLinks={navLinks} logo={Logo}/>
      <Home />
      <About />
      {/* <Projects /> */}
      {/* <Blog /> */}
      <Contact />
      <SocialMediaBar vertical />
    </div>
  );
}

export default App;
