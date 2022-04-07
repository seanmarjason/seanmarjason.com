import './SkillCard.css';

const SkillCard = ({title, image, text}) => 
  <div className="skill-container" data-aos="fade-up">
    <div className="skill-image-container">
      <img src={image} alt={`skill card for ${title}`}/>
    </div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>

export default SkillCard;