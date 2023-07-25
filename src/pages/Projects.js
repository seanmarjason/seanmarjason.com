import { useState } from 'react'
import './pages.css';
import './Projects.css';
import devProjects from '../projects/development';
import productProjects from '../projects/product';
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects = () => {

const [active, setActive] = useState('Product')

  return(
    <div className="page" id="projects-page">
      <h3 id="projects">Projects</h3>
      <div id="project-buttons-container">
      {
        ['Product', 'Development'].map(element => 
          <button 
            className="projects-button"
            disabled={active === element}
            onClick={() => setActive(element)}
          >
            {element}
          </button>
        )
      }
      </div>
      <div id="project-links">
        {
          active === 'Product' &&
            productProjects.map((project, index) => 
              <ProjectCard project={project} key={index} />
            )
        }
        {
          active === 'Development' &&
            devProjects.map((project, index) => 
              <ProjectCard project={project} key={index} />
            )
        }
      </div>
    </div>
  )
}

export default Projects;
