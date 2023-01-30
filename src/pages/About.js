import './pages.css';
import './About.css';
import AboutCard from '../components/AboutCard/AboutCard'
import SkillCard from '../components/SkillCard/SkillCard'
import DevelopmentImage from '../assets/Development-Skills_Laptop-with-code.jpg'
import DesignImage from '../assets/Design-Skills_Wireframes-for-website.jpg'
import AnalysisImage from '../assets/Business-Analysis-Skills_user-journey-with-post-it-notes.jpg'

const skills = [
  {
    title: 'Product Analysis',
    image: AnalysisImage,
    text: 'Idea not fully formed yet? Know you need to put something together, but can\'t work out how to make it sustainable, valuable, or align with your user needs? Bringing years of experience in Business and Systems Analysis, I can help you to uncover user needs and organise them into contained stories ready to be refined and delivered.'
  },
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
]

const About = () =>
    <div className="page" id="about-page">
      <h3 id="about">About</h3>
      <AboutCard />
      <div id="skillcards">
        {
          skills.map(skill => 
            <SkillCard title={skill.title} image={skill.image} text={skill.text} key={skill.title}/>
          )
        }
      </div>
    </div>

export default About;