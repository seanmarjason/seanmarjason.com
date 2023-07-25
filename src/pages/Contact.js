import './pages.css';
import './Contact.css';
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return(
    <div className="page" id="contact-page">
      <h3 id="contact">Contact</h3>
      <div id="contact-form">
        <p id="contact-instruction">If you would like to work together, contact me here or on any of my socials</p>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;