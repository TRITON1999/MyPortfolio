import React, { useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Your email is sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div class="contact__form-container">
          <div class="box-g"></div>
          <div class="box-r"></div>
          <div class="box-b"></div>
          <div class="box"></div>
          <div class="box1-g"></div>
          <div class="box1-r"></div>
          <div class="box1-b"></div>
          <div class="box1"></div>
          <div class="box2-g"></div>
          <div class="box2-r"></div>
          <div class="box2-b"></div>
          <div class="box2"></div>

          <form ref={form} class="contact__form" onSubmit={sendEmail}>
            <input type="hidden" name="form-name" value="form 1" />
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                class="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
