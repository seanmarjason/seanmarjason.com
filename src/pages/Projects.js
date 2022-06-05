import './pages.css';
import './Projects.css';
import projects from '../projects';
import { Link } from "react-router-dom";

const Projects = () => {
  return(
    <div className="page" id="projects-page">
      <h3 id="projects">Projects</h3>
      <div id="project-links">
        {
          projects.map((project, index) => 
            <div key={index} className="project-thumbnail">
              <Link to={project.path || '#'}>
                <div className="project-tile">
                  <h4>{project.heading}</h4>
                  <p>{project.summary}</p>
                </div>
                <div className="project-image-container">
                  <img src={project.image} alt={project.heading}/>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Projects;
