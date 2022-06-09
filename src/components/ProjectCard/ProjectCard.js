import './ProjectCard.css';
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => 
  <div className="project-thumbnail">
    <Link to={project.path || '#'}>
    <div className="project-image-container">
        <img src={project.image} alt={project.heading}/>
      </div>
      <div className="project-description">
        <h4>{project.heading} <span className="project-date">| {project.date}</span></h4>
        <p>{project.summary}</p>
      </div>
    </Link>
  </div>

export default ProjectCard;
