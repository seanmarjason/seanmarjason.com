import { socials } from '../../constants/socialMediaLinks';
import './SocialMediaBar.css';

const SocialMediaBar = ({vertical=false}) => (
  <div id="socials" className={vertical ? "vertical" : ""}>
    {socials.map((item, index) => 
      <a href={item.link} key={index}>
        <img src={item.image} alt={item.title}/>
      </a>
    )}
  </div>
);

export default SocialMediaBar