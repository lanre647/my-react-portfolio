import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("access_key", "60685643-393a-4571-b15c-c922140a9f33");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            officiis voluptatum non, tempore repellendus inventore culpa dolore
            dolores a nihil.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>owolabilanre2006@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+2349154352021</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
