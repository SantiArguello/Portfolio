import React,{useState} from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  function enviarEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jx7ir4n",
        "template_chw8b5k",
        e.target,
        "eYWyh0js3nhgeXxH8"
      )
      .then((res) => {
        console.log(res);
      });
    // Mostrar la alerta o cartel
    setIsSent(true);
  }

  function handleInputChange(event) {
    const input = event.target;
    const group = input.parentNode;
  
    if (input.value !== '') {
      group.classList.add('input-filled');
    } else {
      group.classList.remove('input-filled');
    }
  }

  const handleAceptar = () => {
    // Redireccionar al inicio de la página
    window.location.href = '/';
  };

  return (
    <div className="contact-container">
    <div class="card">
      <span class="title">Contacto</span>
      <form class="form" onSubmit={enviarEmail}>
        <div class="group">
          <input placeholder="" type="text" id="nombre" name="nombre" required="" onInput={handleInputChange} />
          <label for="name">Nombre</label>
        </div>
        <div class="group">
          <input placeholder="" type="email" id="email" name="email" required="" onInput={handleInputChange} />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea placeholder="" id="mensaje" name="mensaje" rows="5" required="" onInput={handleInputChange}></textarea>
          <label for="comment">Mensaje</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>
      {isSent && (
        <div className="alert">
          <p>El correo se envió correctamente.</p>
          <button onClick={handleAceptar}>Aceptar</button>
        </div>
      )}
  </div>
  );
};

export default Contact;
