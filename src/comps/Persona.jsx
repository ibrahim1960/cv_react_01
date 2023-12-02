import React from "react";
import { data } from "../datos";

const Persona = () => {
  return (
    <>
      <div className="display-3 text-center">
        {data.persona.nombres}
        <span className="display-4 fw-semibold ms-3">
          {data.persona.apellidos}
        </span>
      </div>
      <div className="fs-4 mt-4 mb-4 text-center">
        <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
          {data.persona.titulo}
        </span>
      </div>
    </>
  );
};

export default Persona;
