import './NavigationButton.css';

const NavigationButton = ({text, link, newTab=false}) =>
  <>
    <button>
      <a 
        href={link} 
        target={ newTab ? "_blank" : ""} 
        rel="noreferrer" 
      >
        <strong>{text}</strong>
      </a>
    </button>
  </>

export default NavigationButton;
