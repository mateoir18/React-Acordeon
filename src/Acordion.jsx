// En Acordion.jsx
import React, { useState } from 'react';
import { AcordionItem } from './AcordionItem';

export const Acordion = ({ acordeon }) => {
  const [activo, setActivo] = useState();

  const manejarClick = (index) => {
    // Si el elemento ya está activo, desactivarlo
    if (activo === index) {
      setActivo(null); // O puedes establecerlo a -1 o cualquier valor que represente la ausencia de un elemento activo
    } else {
      setActivo(index);
    }
  };

  return (
    <div className="container">
    {acordeon.map((item, index) => (
      <AcordionItem
        key={index}
        pregunta={item.pregunta}
        respuesta={item.respuesta}
        activo={activo === index}
        onClick={() => manejarClick(index)}
      />
    ))}
  </div>
  );
};
