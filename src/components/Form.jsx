import React, { useState } from "react";
import "../style/Form.css";
import phone from "../assets/phoneBanner.jpg";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sujet, setSujet] = useState("");
  return (
    <section id="me-joindre" className="contact">
      <img className="bannerImage" src={phone} alt="Logo" />
      <div className="contact-text">
        <div className="contact-title">Me Contacter</div>
        <div className="contact-phone">Telephone: 514-451-8347</div>
      </div>

      <form className="form" action="">
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        />

        <input
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Courriel"
        />

        <input
          className="form-input"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Telephone"
        />

        <textarea
          className="form-input"
          type="text"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          placeholder="Message"
        />

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Form;
