import React, { useState } from "react";

const login = () => {
    const [nombre, Setnombre] = useState ('')
    const [apellido, Setapellido] = useState ('')
    const [dni, Setdni] = useState ('')
    const [genero, Setgenero] = useState ('')
    const [edad, Setedad] = useState ('')
}
/*const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleDniChange = (e) => {
    setDni(e.target.value);
  };

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
*/
return (
    <div>
        <input
        type="text"
        placeholder="Nombre"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="apellido"
        value={lastname}
        onChange={handleLastnameChange}
      />
      <input
        type="number"
        placeholder="dni"
        value={dni}
        onChange={handledniChange}
      />
      <input
        type="text"
        placeholder="genero"
        value={sex}
        onChange={handlesexChange}
      />
      <input
        type="number"
        placeholder="ingrese su edad"
        value={age}
        onChange={handleageChange}
      />
    </div>
)
export default login