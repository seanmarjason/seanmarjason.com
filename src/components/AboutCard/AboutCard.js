import './AboutCard.css';
import Face from '../../assets/Face-square.jpg';

const AboutCard = () => 
     <div id="about-container">
      <div id="about-images">
        <img id="about-face" src={Face} alt="Sean Marjason's face" />
      </div>
      <div id='about-text'>
        <p>
          <strong>Hello World!</strong><br />
          My name is <strong>Sean Marjason</strong> <span>&</span><br />
          I’m a <strong>Web Developer</strong> <span>&</span> <strong>Technologist</strong><br />
          <span>currently based in London, UK</span>
        </p>
        <p id="quote">
          <q>
            Insanity is doing the same thing over and over, but expecting a different result
          </q><br />
            <span>- not Albert Einstein, 1955</span>
        </p>
        <p>
          We study, we work, we travel, we live, we repeat ... but like all good Business Analysts, 
          I have to ask <strong>why</strong>? (and <strong>why</strong>, and <strong>why</strong>, 
          and <strong>why</strong>, and <strong>why</strong> again!)
        </p>
        <p>
          Well, I used to just ask why ... now, I take it a step further. <u>Now, I can build stuff</u>! 
        </p>
        <p>
          I build platforms, products, applications to <strong>invoke change </strong>
          and <strong>solve problems</strong>. Sometimes these are <i>simple</i> problems, 
          sometimes they are <i>known</i>, but sometimes they are 
          <i> novel</i>, <i>complex</i>, and <strong>exciting</strong>.
        </p>
        <p>
          Check out some of my work below, and if you're interested in working with me, drop me a line on your preferred channel.
        </p>
      </div>
    </div>


export default AboutCard;
