import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <h1></h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto fw-semibold">
              <a className="nav-link" aria-current="page" href='#contacto'>
                Contacto
              </a>
              <a className="nav-link" href='#perfil'>
                Perfil
              </a>
              <a className="nav-link" href='#experiencia'>
                Experiencia
              </a>
              <a className="nav-link" href='#educacion'>
                Educación
              </a>
              <a className="nav-link" href='#habilidades'>
                Habilidades
              </a>
              <a className="nav-link" href='#idiomas'>
                Idiomas
              </a>
              <a className="nav-link" href='#redes'>
                Redes
              </a>
             
            </div>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-4">

        </div>
        <div className="col-md-8">
          <hr className="border border-2 border-light-subtle" />

        </div>
      </div>
    </div>
  );
};

export default Menu;
