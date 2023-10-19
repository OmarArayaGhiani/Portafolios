//ccs
import "../css/contact.css"

//icons
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contáctame</h3>
      <p>Para crear proyectos juntos</p>
      <hr />
      <p className="section">
        <a href="mailto:sergio.araya.ghiani@gmail.com" className="a-mail">
          sergio.araya.ghiani@gmail.com
        </a>
        <span className="bars">||</span>
        <a
          href="https://wa.me/+56982405566"
          target="_blank"
          className="a-number"
        >
          <AiOutlineWhatsApp className="contact-icon" />
          <span>+56 9 82405566</span>
        </a>
      </p>
      <div className="contact-icons">
        <a href="https://github.com/OmarArayaGhiani" target="_blank">
          <AiFillGithub className="contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sergio-araya-ghiani-bb0b4a229/"
          target="_blank"
        >
          <AiFillLinkedin className="contact-icon" />
        </a>
      </div>
    </div>
  )
}

export default Contact
