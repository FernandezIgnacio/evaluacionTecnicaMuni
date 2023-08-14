import React, { useState } from "react";

const WorkshopBox = ({ workshop }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleEnroll = () => {
    if (acceptedTerms) {
      const confirmAccept = window.confirm(
        "¿Seguro que deseas aceptar los términos?"
      );
      if (confirmAccept) {
        setIsEnrolled(true);
        
      }
    } else {
      alert("Debes aceptar los términos para inscribirte.");
    }
  };

  const handleAcceptTerms = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="workshop-box">
      <h3>{workshop.name}</h3>
      <p>{workshop.description}</p>
      <label>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={handleAcceptTerms}
        />
        Acepto los términos
      </label>
      {isEnrolled ? (
        <p>¡Inscrito en este taller! Fecha: {workshop.date}, Hora: {workshop.time}, Lugar: {workshop.location}</p>
      ) : (
        <button onClick={handleEnroll}>Inscribirse</button>
      )}
    </div>
  );
};

export default WorkshopBox;

