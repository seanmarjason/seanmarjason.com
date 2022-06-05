import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home'
// import About from './pages/About'
// import Projects from './pages/Projects'
// // import Blog from './pages/Blog'
// import Contact from './pages/Contact'
import Logo from './assets/SMLogo_Black.png'
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage, navLinks } from './HomePage';
import ProjectDetailPage from './components/ProjectDetailPage/ProjectDetailPage';
import projects from './projects';

import AOS from 'aos';
import 'aos/dist/aos.css';

// const navLinks = {
//   Home: '#home-page',
//   About: '#about-page',
//   Projects: '#projects-page',
//   // Blog: '#blog',
//   Contact: '#contact-page'
// }

function App() {

  AOS.init();

  return (
    <div className="App">
      
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Helmet>
      </HelmetProvider>

      <Navbar navLinks={navLinks} logo={Logo}/>

      <SocialMediaBar vertical />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
            projects.map((project, index) => 
              <Route 
                path={project.path || '#'} 
                element={<ProjectDetailPage project={project}/>}
                key={index}
              />
            )
          }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
