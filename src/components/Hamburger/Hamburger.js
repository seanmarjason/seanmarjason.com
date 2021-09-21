import './Hamburger.css';

const Hamburger = ({callback}) =>
  <>
    <div id="burger" className="" onClick={callback}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  </>

export default Hamburger;
