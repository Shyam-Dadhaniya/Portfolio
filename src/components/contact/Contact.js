import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const notify = () => toast(" ✅  Submitted Successfully");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_289h5hx",
        "template_0r1yegk",
        form.current,
        "qe5y9RNGX6l-fmsLS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    for (const item of e.target.children) {
      // console.dir(item);
      if (item.tagName === "INPUT") {
        // console.dir(item);
        item.value = "";
      } else if (item.tagName === "TEXTAREA") {
        item.value = "";
      }
    }
  };
  return (
    <section id="contact">
      <div className="d-flex flex-column align-items-center  mt-7 mb-4">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h5>shyampatel522@gmail.com</h5>
            <a href="mailto:shyampatel522@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__icon" />
            <h5>shyam_dadhaniya_</h5>
            <a href="https://instagram.com/shyam_dadhaniya_">Send a message</a>
          </article>

          <article className="contact__option">
            <div className="icon">
              <BsWhatsapp className="contact__icon" />
            </div>
            <h5>+91 98245-46606</h5>
            <a href="https://wa.me/919824546606" className="send">
              Send a message
            </a>
          </article>
        </div>
        {/* END contact__options */}

        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your E-mail" />
          <textarea name="message" placeholder="Your Message" />
          <div className="button">
            <button onClick={notify} type="submit" className="btn btn-send">
              Send
            </button>
            <ToastContainer
              className="success"
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </form>
      </div>
      <div className="scrollUp">
        <a href="#" className="rounded-circle scroll ">
          <BsFillArrowUpCircleFill className="scroll__up" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
