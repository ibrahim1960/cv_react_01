import React from "react";
import { data } from "../datos";

const Perfil = () => {
  return (
    <>
      <div
        className="mt-4 border border-white rounded-4 border-opacity-25"
        id="perfil"
      >
        <h3 className="text-center mt-5">
          <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
            <i class="bi bi-file-earmark-text-fill me-2"></i>
            Perfil
          </span>
        </h3>
        <p className="lead p-4 justify opacity-75">{data.perfil.text}</p>
      </div>
    </>
  );
};

export default Perfil;
