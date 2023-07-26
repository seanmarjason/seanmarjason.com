import './ProjectCard.css';
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => 
  <Link to={project.path || '#'} className="project-thumbnail">
    <div className="project-image-container">
        <img src={project.image} alt={project.heading}/>
      </div>
      <div className="project-description">
        <h4>{project.heading} <span className="project-date">| {project.date}</span></h4>
        <p>{project.summary}</p>
      </div>
  </Link>

export default ProjectCard;
