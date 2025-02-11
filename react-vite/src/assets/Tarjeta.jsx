import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="tarjeta-img" />
      <h2>{nombre} {apellido}</h2>
      <p>{profesion}</p>
    </div>
  );
};

export default Tarjeta;
