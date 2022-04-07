import './pages.css';
import './Projects.css';
import comingSoon from '../assets/0005720_coming-soon-page_550.png'

const Projects = () => {
  return(
    <div className="page" id="projects-page">
      <h3 id="projects">Projects</h3>
      <img className="coming-soon" src={comingSoon} alt="coming soon" />
    </div>
  )
}

export default Projects;