import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre('');
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <h2>{mensaje}</h2>}
    </div>
  );
};

export default Formulario;
