import React, { useState } from "react";
import "../style/Form.css";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sujet, setSujet] = useState("");
  return (
    <section>
      <form className="form" action="">
        <div>
          <label className="form-label">Prenom</label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* <label className="form-label">
          Prenom
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> */}
        <label className="form-label">
          Nom
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className="form-label">
          Courriel
          <input
            className="form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-label">
          Numero de telephone
          <input
            className="form-input"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label className="form-label">
          Sujet
          <input
            className="form-input"
            type="text"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
          />
        </label>
      </form>
    </section>
  );
}

export default Form;
