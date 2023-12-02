import React from "react";
import { data } from "../datos";

const lastKey = data.educacion.length;

const ExpCard = ({ ex: { item, desde, hasta, empresa, cargo, items } }) => (
  <>
    <div className="text-center">
      <div className="fs-5">
        {desde} <i className="bi bi-three-dots ms-2 me-2"></i> {hasta}
      </div>
      <div className="fs-4 fw-semibold">{empresa}</div>
      <div className="fs-4">{cargo}</div>
    </div>
    <ul className="list-group list-group-flush mt-3">
      {items.map((item) => (
        <p
          key={String(item)}
          className="bg-transparent lh-base lead justify px-4"
        >
          {item}
        </p>
      ))}
    </ul>
    {item !== lastKey ? <hr className="border border-dark-subtle" /> : ""}
  </>
);

const Experiencia = () => {
  return (
    <>
      <div className="mt-3 border border-white rounded-4 border-opacity-25">
        <h3 className="text-center mt-5 pb-4">
          <span className="py-2 px-3 bg-dark border border-white rounded-2 border-opacity-50 shadow-lg opacity-75">
            <i class="bi bi-briefcase-fill me-2"></i>
            Experiencia
          </span>
        </h3>
        <div className="text-center opacity-75">
          {data.exp.map((ex) => (
            <ExpCard ex={ex} key={ex.empresa} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experiencia;
