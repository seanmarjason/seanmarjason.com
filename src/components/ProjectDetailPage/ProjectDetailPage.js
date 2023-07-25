import './ProjectDetailPage.css';
import NavigationButton from '../NavigationButton/NavigationButton';

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
        {project.link && <NavigationButton text="View Project &#10138;" link={project.link} newTab/>}
        {project.source && <NavigationButton text="View Source &#10100;&#10101;" link={project.source} newTab/>}
      </div>
    </div>
    <div className="project-detail-footer">
    </div>
  </>

export default ProjectDetailPage;
