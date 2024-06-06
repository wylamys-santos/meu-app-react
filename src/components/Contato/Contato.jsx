import React, { useState } from "react";

import "./Contato.css";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");

   function enviarFormulario(event) {
    event.preventDefault();

    console.log("Formulário enviado");

    const texto = `Nome: ${name}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${msg}`;

    const numeroWhatsapp = import.meta.env.VITE_WHATSAPP_NUMBER; // numero do whatsapp para o qual a mensagem será enviada

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}text=${encodeURIComponent(texto)}`;

    window.open(linkWhatsapp, '_blank');
  }

  function mascaraTelefone(event) {
    const texto = event.target.value;
    const textoApenasNumeros = texto.replace(/\D/g, '');substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length <= 11) {
      telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    setTelefone(telefoneFormatado);
    
  }

  return (
    <form onSubmit={enviarFormulario}>

      <fieldset>
        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          name="input-name"
          id="input-name"
          required minLength="2"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          name="input-email"
          id="input-email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}

        />
      </fieldset>

      <fieldset>
        <label htmlFor="input-telefone">Telefone</label>
        <input
          type="telefone"
          name="input-telefone"
          id="input-telefone"
          placeholder="(99) 99999-9999"
          required
          pattern="^^\(\d{2}\) \d{5}-\d{4}$"
          maxLength="15"
          value={telefone}
          onChange={mascaraTelefone}
        />


      </fieldset>

      <fieldset>
        <label htmlFor="input-msg">Mensagem</label>
        <textarea
          name="input-msg"
          id="input-msg"
          cols="30"
          rows="10"
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        ></textarea>
      </fieldset>

      <center>
        <input type="submit" value="ENVIAR" className="butoon" />
      </center>

    </form>

  )
}

export default Contato;
