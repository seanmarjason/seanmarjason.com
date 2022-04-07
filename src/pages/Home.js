import './pages.css'
import './Home.css'
import NavigationButton from '../components/NavigationButton/NavigationButton'


const Home = () => {
  return(
    <div className="page" id="home-page">
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