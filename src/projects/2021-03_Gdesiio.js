import image from './images/2021-03_Gdesiio.png'
import wireframes_web from './images/Wireframes_Web.png'
import wireframes_mobile from './images/Wireframes_Mobile-Portrait.png'

const project = {
  path: '/gdesi-io',
  heading: 'Gdesi.io',
  date: 'March 2021',
  image: image,
  summary: 'A website dedicated to the future of remote work. Still a work in progress, stay tuned for more!',
  link: 'https://www.gdesi.io/',
  source: 'https://github.com/seanmarjason/gdesi.io',
  content: 
    <>
      <p>
        Gdesi.io is a side project I have been preparing whenever I find time to work on 
        projects which are not part of my day job, or required to complete university courses.
      </p>
      <p>
        The project aims to be the central repository of information on remote work, acting 
        as an advocate of a remote approach and providing tips to both employers and staff 
        on how to achieve a working style which allows for a better balance of work and life. 
        It also aims to provide tooling to solve some of the challenges of remote work, such 
        as facilitating more unplanned "water cooler" discussions amongst colleagues.
      </p>
      <p>
        While the project is currently still a Work In Progress, some initial wireframes have been 
        put together to guide the initial MVP for the site. These aimed to validate the user 
        journey through the site and segment content into key areas which then informed the 
        structure of the pages.
      </p>
      <img src={wireframes_web} alt="gdesi.io web wireframes" />
      <img src={wireframes_mobile} alt="gdesi.io mobile wireframes" />
      <p>
        More work is still required to pull together content for the site, establish a good way 
        to manage content, and to deploy it somewhere which will enable scalability when adding 
        tooling for users. So in the meantime, the site simply retuns a placeholder page.
      </p>
    </>
}

export default project;
