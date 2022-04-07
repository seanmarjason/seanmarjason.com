import './pages.css';
import './Contact.css';
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return(
    <div className="page" id="contact-page">
      <h3 id="contact">Contact</h3>
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;