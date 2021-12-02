import './pages.css';
import AboutCard from '../components/AboutCard/AboutCard'
import SkillCard from '../components/SkillCard/SkillCard'
import DevelopmentImage from '../assets/altumcode-P2SkP_PXhlU-unsplash_square.jpg'
import DesignImage from '../assets/sigmund-4UGmm3WRUoQ-unsplash_square.jpg'
import AnalysisImage from '../assets/startae-team-36Aai16fubc-unsplash_square.jpg'

const skills = [
  {
    title: 'Development',
    image: DevelopmentImage,
    text: 'Looking for a new website? Need something more complex than static content that you could do on Wix, Squarespace, or Wordpress? I can help you put together a lightweight website suiting your needs with market standard web frameworks (ReactJS, Node, AWS).'
  },
  {
    title: 'Design',
    image: DesignImage,
    text: 'Have an idea but not sure how to put together a product or service that will appeal to your users? Taking an iterative approach, I can help you put together mockups to test your idea, or to lay out your application ready for development using platforms easily consumed by your developers (Sketch, Invision Studio, Adobe XD)'
  },
  {
    title: 'Analysis',
    image: AnalysisImage,
    text: 'Idea not fully formed yet? Know you need to put something together, but can\'t work out how to make it sustainable, valuable, or align with your user needs? Bringing years of experience in Business and Systems Analysis, I can help you to uncover user needs and organise them into contained stories ready to be refined and delivered.'
  },
]

const About = () =>
    <div id="about" className="page">
      <h3>About</h3>
      <AboutCard />
      <div id="skillcards">
        {
          skills.map(skill => 
            <SkillCard title={skill.title} image={skill.image} text={skill.text}/>
          )
        }
      </div>
    </div>

export default About;