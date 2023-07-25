import image from './images/2021-11_Sean-Marjason-personal-website.jpg'
import designInspiration from './images/Design_Graphic.jpg'
import seanmarjasonDesign from './images/seanmarjasoncom-designs.jpg'

const project = {
  path: '/personal-website',
  heading: 'My Personal Website',
  date: 'November 2021',
  image: image,
  summary: 'My new personal portfolio website, written in React and applying commercial approaches to structure and version control.',
  link: 'https://www.seanmarjason.com/',
  source: 'https://github.com/seanmarjason/seanmarjason.com',
  content: 
    <>
      <p>
        After spending at least 2 years learning and working with React, I thought it 
        was about time to update my personal website.
      </p>
      <p>
        This site, the site you are browsing through right now.
      </p>
      <p>
        Planning for the site also included updates to design. To do this, I looked 
        around at various sites where I appreciate the design, and researched how best 
        to apply colour schemes and styling to make a website appealing and convey a 
        consistent brand.
      </p>
      <img src={designInspiration} alt="seanmarjason.com design inspiration" />
      <p>
        Taking this inspiration, I put together an initial light mode design with the 
        aim to also create a dark mode design and a toggle for users. The design is 
        intended to be minimal and provide enough space to implement interesting 
        interactable components for end users as the site (and my skills) progress. 
      </p>
      <img src={seanmarjasonDesign} alt="seanmarjason.com designs" />
      <p>
        I then built the site using my knowledge of React, creating individual components 
        which fit together to create each "page". Given this is a single page application, 
        navigation is also handled client side using the react router. Components such as 
        the project page allow for pages to be built once and rendered multiple times, 
        taking a data driven approach to page rendering with the aim to later connect 
        an external CMS such as Wordpress to be able to more easily manage content such 
        as blog posts and project pages.
      </p>
      <p>
        For future iterations, I also aim to add more interactive elements to the site, 
        making visits to the site more engaging for users. This will become my playground 
        for new and interesting functionality which I am to then bring to other projects. 
      </p>
    </>
}

export default project;
