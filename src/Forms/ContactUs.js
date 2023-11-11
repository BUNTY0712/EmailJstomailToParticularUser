import React from "react";
import emailjs from "emailjs-com";

const ContactUs = ({ onClose }) => {
  function sendEmail(e) {
    e.preventDefault();

    // Get the recipient email address from the form
    const recipientEmail = e.target.from_email.value;

    emailjs
      .sendForm(
        "service_f4uu9d5",
        "template_ves5qbt",
        e.target, // Pass the form element directly
        "KEh-47RO1dt9QCm80"
      )
      .then(
        (result) => {
          console.log(result.text);
          onClose(); // Close the modal after sending the email
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div>
        <label>Name</label>
        <input className="form-control" type="text" name="from_name" />
      </div>
      <div>
        <label>Email</label>
        <input className="form-control" type="email" name="from_email" />
      </div>
      <div>
        <label>Subject</label>
        <input className="form-control" type="text" name="subject" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Message</label>
        <textarea className="form-control" name="html_message" />
      </div>

      <input className="form-control btn-dark" type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
