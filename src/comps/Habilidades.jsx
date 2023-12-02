import React from "react";

const Habilidades = () => {
  return (
    <>
      <div className="mt-3 border border-white rounded-4 border-opacity-25">
        <h3 className="text-center mt-5">
          <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
            <i class="bi bi-gear-fill me-2"></i>
            Habilidades
          </span>
        </h3>
        <div className="row ps-3 mt-4 opacity-75">
          <div className="col-sm-12 text-start">
            <img
              src={require("../assest/excel.png")}
              className="rounded float-start me-3"
              alt="excel"
            />
            <p className="fs-5 mt-2 ms-3">Excel Intermedio</p>
          </div>
        </div>
        <div className="row ps-3 mt-3 opacity-75">
          <div className="col-sm-12 text-start">
            <img
              src={require("../assest/word.png")}
              className="rounded float-start me-3"
              alt="word"
            />
            <p className="fs-5 mt-2 ms-3">Word Avazado</p>
          </div>
        </div>
        <div className="row ps-3 mt-3 opacity-75">
          <div className="col-sm-12 text-start">
            <img
              src={require("../assest/power-bi.png")}
              className="rounded float-start me-3"
              alt="power-bi"
            />

            <p className="fs-5 mt-2 ms-3">Power BI Básico</p>
          </div>
        </div>
        <div className="row ps-3 mt-3 mb-3 opacity-75">
          <div className="col-sm-12 text-start">
            <img
              src={require("../assest/win11.png")}
              className="rounded float-start me-3"
              alt="win11"
            />
            <p className="fs-5 mt-2 ms-3">Windows 11 Básico</p>
          </div>
        </div>
        <div className="row ps-3 mt-3 mb-3 opacity-75">
          <div className="col-sm-12 text-start">
            <img
              src={require("../assest/ps.png")}
              className="rounded float-start me-3 ms-1"
              alt="Photoshop"
              style={{ width: "2.5rem" }}
            />
            <p className="fs-5 mt-2 ms-3">Photoshop CC Intermedio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habilidades;
