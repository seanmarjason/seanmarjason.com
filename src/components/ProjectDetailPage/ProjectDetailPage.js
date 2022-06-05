import './ProjectDetailPage.css';

const ProjectDetailPage = ({ project }) =>
  <div>
    <h1>{project.heading}</h1>
    <p>{project.date}</p>
    <img src={project.image} alt={project.heading}/>
    {project.content}
  </div>

export default ProjectDetailPage;
