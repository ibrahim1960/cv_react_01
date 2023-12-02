import React from "react";

const Idiomas = () => {
  return (
    <>
      <div className="mt-3 border border-white rounded-4 border-opacity-25">
        <h3 className="text-center mt-5 mb-4">
          <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
            <i class="bi bi-globe2 me-2"></i>
            Idiomas
          </span>
        </h3>
        <div className="row mt-5 fs-5 text-start opacity-75">
          <div className="col ms-3">
            Español
            <img
              src={require("../assest/espanol.png")}
              alt="español"
              style={{ width: "2rem" }}
              className="mb-1 ms-2"
            />
          </div>
          <div className="col">Nativo</div>
        </div>
        <div className="row fs-5 text-start opacity-75">
          <div className="col mt-3 ms-3">
            Inglés
            <img
              src={require("../assest/ingles.png")}
              alt="ingles"
              style={{ width: "2rem" }}
              className="ms-2"
            />
          </div>
          <div className="col mt-3">C1 Avanzado</div>
        </div>
        <div className="row fs-5 mb-4 text-start opacity-75">
          <div className="col mt-3 ms-3">
            Frances
            <img
              src={require("../assest/frances.png")}
              alt="frances"
              style={{ width: "2rem" }}
              className="ms-2"
            />
          </div>
          <div className="col mt-3">Lectura Básica</div>
        </div>
      </div>
    </>
  );
};

export default Idiomas;
