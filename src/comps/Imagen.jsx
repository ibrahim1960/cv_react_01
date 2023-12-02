import React from "react";

let ava = Math.floor(Math.random() * 16) + 1;

const Imagen = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <img
          src={require(`../assest/avatar${ava}.png`)}
          className="img-thumbnail shadow p-3 mb-5 bg-body-tertiary rounded"
          alt="foto"
          style={{ width:"" }}
        />
      </div>
    </>
  );
};

export default Imagen;
