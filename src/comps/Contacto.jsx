import React from "react";
import { data } from "../datos";

const Contacto = () => {
  return (
    <>
      <div className="pt-4 pb-4 fs-4">
        <div className="mt-2 text-center opacity-75">
          <div>
            <i class="bi bi-phone-fill me-2"></i>
            {data.contacto.celular}
          </div>
        </div>
        <div className="mt-2 text-center opacity-75">
          <div>
            <i class="bi bi-telephone-fill me-2"></i>
            {data.contacto.fijo}
          </div>
        </div>
        <div className="mt-2 text-center opacity-75">
          <div>
            <i class="bi bi-envelope-fill me-2"></i>
            {data.contacto.email}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
