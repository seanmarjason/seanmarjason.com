import './ProjectDetailPage.css';
import Logo from '../../assets/SMLogo_Black.png'

const ProjectDetailPage = ({ project }) =>
  <>
    <div className="project-detail-page">
      <h1>{project.heading}</h1>
      <p><i>{project.date}</i></p>
      <div className="image-container">
        <img src={project.image} alt={project.heading}/>
      </div>
      <div className="project-detail-content">
        {project.content}
      </div>
      <div className="project-detail-links">
        {project.link && <a href={project.link} target="_blank" rel="noreferrer">View Project</a>}
        {project.source && <a href={project.source} target="_blank" rel="noreferrer">View Source</a>}
      </div>
    </div>
    <div className="project-detail-footer">
      <div id="logo">
        <img src={Logo} alt="SM Logo in Black"/>
      </div>
    </div>
  </>

export default ProjectDetailPage;
