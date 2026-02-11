// ContactForm.jsx
import { useState } from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("תודה! הפרטים נשלחו.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="all-contact-form">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>השארת פרטים</h2>

        <label>
          <AiOutlineUser className="icon" />
          <input
            type="text"
            name="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <AiOutlineMail className="icon" />
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <AiOutlinePhone className="icon" />
          <input
            type="tel"
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          <textarea
            name="message"
            placeholder="הודעה"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">שלח</button>
      </form>
    </div>

  );
}
