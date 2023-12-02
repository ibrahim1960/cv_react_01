import React from "react";
import { data } from "../datos";

const Lugaryfecha = () => {
  return (
    <div className="row text-center mt-5 mb-5">
      <div className="p-3 fs-6 fst-italic opacity-75">
        {data.fecha}
      </div>
    </div>
  );
};

export default Lugaryfecha;
