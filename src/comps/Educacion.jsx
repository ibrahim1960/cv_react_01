import React from "react";
import { data } from "../datos";

const lastKey = data.educacion.length;

// Mostrar Educación

const EduCard = ({ edu: { item, desde, hasta, escuela, titulo, rama } }) => (
  <>
    <div className="fs-5 mt-4">
      {desde} <i className="bi bi-three-dots ms-2 me-2"></i> {hasta}
    </div>
    <div className="fs-4 fw-semibold">{escuela}</div>
    <div className="fst-italic fs-4">{titulo}</div>
    <div className="fs-4">{rama}</div>
    {item !== lastKey ? (
      <hr className="border border-1 border-light" />
    ) : (
      <br />
    )}
  </>
);

const Educacion = () => {
  return (
    <>
      <div className="mt-3 border border-white rounded-4 border-opacity-25">
        <h3 className="text-center mt-5 pb-3">
          <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
            <i class="bi bi-mortarboard-fill me-2"></i>
            Educación
          </span>
        </h3>
        <div className="text-center opacity-75">
          {data.educacion.map((edu) => (
            <EduCard edu={edu} key={edu.titulo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Educacion;
