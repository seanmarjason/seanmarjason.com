import './pages.css';
import './Projects.css';
import projects from '../projects';

const Projects = () => {
  return(
    <div className="page" id="projects-page">
      <h3 id="projects">Projects</h3>
      <div id="project-links">
        {
          projects.map((post, index) => 
            <div key={index} className="project-thumbnail">
              <div className="project-tile">
                <h4>{post.heading}</h4>
                <p>{post.summary}</p>
              </div>
              <div className="project-image-container">
                <img src={post.image} alt={post.heading}/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Projects;