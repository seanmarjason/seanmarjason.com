import './AboutCard.css';
import Face from '../../assets/Sean-Marjason_profile-picture.jpg';

const AboutCard = () => 
     <div id="about-container">
      <div id="about-images">
        <img id="about-face" src={Face} alt="Sean Marjason's face" />
      </div>
      <div id='about-text'>
        <p>
          <strong>Hello World!</strong><br />
          My name is <strong>Sean Marjason</strong> <span>&</span><br />
          I’m a <strong>Product Manager</strong> <span>&</span> <strong>Software Engineer</strong><br />
          <span>currently based in London, UK</span>
        </p>
        <p id="quote">
          <q>
            Insanity is doing the same thing over and over, but expecting a different result
          </q><br />
            <span>- not Albert Einstein, 1955</span>
        </p>

        <p>
          I've spent most of my career analysing businesses, understanding their needs, and 
          managing the successful delivery of bespoke digital solutions to improve how we 
          work together and deliver to customers.
        </p>

        <p>
          My skillset used to be full of asking the right questions, and refining my understanding 
          of a business need into something that can be reflected in software.
        </p>

        <p>
          Recently though I've taken that a step further. <u>Now, I can reflect those needs in scalable, testable code</u>.
        </p>
        <p>
          I build platforms, products, and applications to <strong>invoke change </strong>
          and <strong>solve problems</strong>. Sometimes these are <i>simple</i> problems, 
          sometimes they are <i>known</i>, but sometimes they are 
          <i> novel</i>, <i>complex</i>, and <strong>exciting</strong>.
        </p>
        <p>
          Have a look at some of my work below, and if you're interested in working with me, drop me a line on your preferred channel.
        </p>
      </div>
    </div>


export default AboutCard;
