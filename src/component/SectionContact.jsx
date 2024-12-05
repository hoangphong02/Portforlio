import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SectionContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Contact sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Contact sending failed");
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Fullname" name="from_name" />
            <input type="email" placeholder="Email" name="from_email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone number" name="from_phone" />
            <input type="text" placeholder="Subject" name="from_subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            cols={30}
            rows={10}
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default SectionContact;
