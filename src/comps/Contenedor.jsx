import React from "react";
import Imagen from "./Imagen";
import Persona from "./Persona";
import Contacto from "./Contacto";
import Redes from "./Redes";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Educacion from "./Educacion";
import Habilidades from "./Habilidades";
import Idiomas from "./Idiomas";
import Lugaryfecha from "./Lugaryfecha";

const Contenedor = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Imagen />
            <Persona />
            <Contacto />
            <Redes />
          </div>
          <div className="col-md-8">
            <Perfil />
            <Experiencia />
            <Educacion />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Habilidades />
          </div>
          <div className="col-md-4">
            <Idiomas />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="text-center mb-4">
              <button className="btn btn-lg btn-outline-success mt-4 mb-3">
                <i class="bi bi-cloud-arrow-down-fill me-2 fs-3"></i>
                Descargar Curriculum
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <Lugaryfecha />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contenedor;
