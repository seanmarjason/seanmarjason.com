import './pages.css'
import './Home.css'
import { Helmet } from 'react-helmet'
import NavigationButton from '../components/NavigationButton/NavigationButton'


const Home = () => {
  return(
    <div id="homePage" className="page">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Helmet>
      <div id="headline">
        <h1 id="home" className="">Sean Marjason</h1>
        <p id="tagline">Web Developer | Analyst | Technologist</p>
        <div id="keylinks">
          <NavigationButton text="View Portfolio" link="#projects"/>
          <NavigationButton text="Contact Me" link="#contact"/>
        </div>
      </div>
    </div>
  );
}

export default Home;