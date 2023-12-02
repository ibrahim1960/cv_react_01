const persona = {
  nombres: "full",
  apellidos: "name",
  edad: "63",
  titulo: "t i t l e",
};

const contacto = {
  fijo: "+99 999-999.99.99",
  celular: "+99 999-999.99.99",
  email: "yourmail@server.com",
};

const perfil = {
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto sint corrupti esse, vero culpa autem quam unde expedita nemo necessitatibus doloremque nulla provident in molestias aliquam ut doloribus. Iusto soluta amet libero, mollitia repellat ipsam odit nisi expedita eum quae recusandae culpa. Officiis sit commodi ipsa cupiditate quis consectetur in praesentium veniam iure, odit dolorum temporibus! Aperiam ipsam quibusdam deleniti cumque ratione libero molestiae nihil totam fugit, corrupti quasi quia, dignissimos aspernatur dolores esse sunt facilis ea ducimus exercitationem quisquam deserunt. A eaque, non harum unde blanditiis commodi dolores nostrum, minus voluptates voluptatibus reprehenderit sed suscipit debitis eum sit.",
};

const educacion = [
  {
    item: 1,
    desde: "Enero, 1995",
    hasta: "Diciembre, 1999",
    escuela: "Universidad de Ciencias Administrativas",
    titulo: "Contador Público",
    rama: "Contabilidad de Costos",
  },
  {
    item: 2,
    desde: "Enero, 2000",
    hasta: "Junio, 2000",
    escuela: "Instituto de Administración",
    titulo: "Tributos Fiscales",
    rama: "",
  },
  {
    item: 3,
    desde: "Julio, 2000",
    hasta: "Diciembre, 2000",
    escuela: "Escuela de Finanzas",
    titulo: "Costos Industriales",
    rama: "",
  },
];

const exp = [
  {
    item: 1,
    desde: "Jan 2000",
    hasta: "Dec 2002",
    empresa: "Company name",
    cargo: "Role",
    items: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto sint corrupti esse, vero culpa autem quam unde expedita nemo necessitatibus doloremque nulla provident in molestias aliquam ut doloribus. Iusto soluta amet libero, mollitia repellat ipsam odit nisi expedita eum quae recusandae culpa. Officiis sit commodi ipsa cupiditate quis consectetur in praesentium veniam iure, odit dolorum temporibus! Aperiam ipsam quibusdam deleniti cumque ratione libero molestiae nihil totam fugit, corrupti quasi quia, dignissimos aspernatur dolores esse sunt facilis ea ducimus exercitationem quisquam deserunt. A eaque, non harum unde blanditiis commodi dolores nostrum, minus voluptates voluptatibus reprehenderit sed suscipit debitis eum sit.",
      "",
      "",
      "",
      "",
      ""],
  },
  {
    item: 2,
    desde: "Jan 2003",
    hasta: "Dec 2004",
    empresa: "Company name",
    cargo: "Role",
    items: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto sint corrupti esse, vero culpa autem quam unde expedita nemo necessitatibus doloremque nulla provident in molestias aliquam ut doloribus. Iusto soluta amet libero, mollitia repellat ipsam odit nisi expedita eum quae recusandae culpa. Officiis sit commodi ipsa cupiditate quis consectetur in praesentium veniam iure, odit dolorum temporibus! Aperiam ipsam quibusdam deleniti cumque ratione libero molestiae nihil totam fugit, corrupti quasi quia, dignissimos aspernatur dolores esse sunt facilis ea ducimus exercitationem quisquam deserunt. A eaque, non harum unde blanditiis commodi dolores nostrum, minus voluptates voluptatibus reprehenderit sed suscipit debitis eum sit.",
      "",
      "",
      "",
      "",
      ""],
  },
  {
    item: 3,
    desde: "Jan 2005",
    hasta: "Dec 2010",
    empresa: "Company name",
    cargo: "Role",
    items: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto sint corrupti esse, vero culpa autem quam unde expedita nemo necessitatibus doloremque nulla provident in molestias aliquam ut doloribus. Iusto soluta amet libero, mollitia repellat ipsam odit nisi expedita eum quae recusandae culpa. Officiis sit commodi ipsa cupiditate quis consectetur in praesentium veniam iure, odit dolorum temporibus! Aperiam ipsam quibusdam deleniti cumque ratione libero molestiae nihil totam fugit, corrupti quasi quia, dignissimos aspernatur dolores esse sunt facilis ea ducimus exercitationem quisquam deserunt. A eaque, non harum unde blanditiis commodi dolores nostrum, minus voluptates voluptatibus reprehenderit sed suscipit debitis eum sit.",
      "",
      "",
      "",
      "",
      ""],
  },
];

const d = new Date();

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const fecha =
  "Caracas, " +
  days[d.getDay()] +
  " " +
  d.getDate() +
  " de " +
  months[d.getMonth()] +
  " de " +
  d.getFullYear();

export default { persona, contacto, perfil, educacion, exp, fecha };
