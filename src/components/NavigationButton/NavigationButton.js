import './NavigationButton.css';

const NavigationButton = ({text, link}) =>
  <>
    <button>
      <a href={link}>
        <strong>{text}</strong>
      </a>
    </button>
  </>

export default NavigationButton;
