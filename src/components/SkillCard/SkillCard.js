import './SkillCard.css';

const SkillCard = ({title, image, text}) => 
  <div class="skill-container">
    <div class="skill-image-container">
      <img src={image} alt={`skill card for ${title}`}/>
    </div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>

export default SkillCard;