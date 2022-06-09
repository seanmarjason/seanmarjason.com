import './pages.css';
import './Projects.css';
import projects from '../projects';
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects = () => {
  return(
    <div className="page" id="projects-page">
      <h3 id="projects">Projects</h3>
      <div id="project-links">
        {
          projects.map((project, index) => 
            <ProjectCard project={project} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default Projects;
