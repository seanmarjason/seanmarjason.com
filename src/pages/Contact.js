import './pages.css';
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return(
    <div className="page" id="contact-page">
      <h3 id="contact">Contact</h3>
      <ContactForm />
    </div>
  )
}

export default Contact;