import PropTypes from "prop-types";

export default function CardWork({ nombre, lugar, fecha, funciones }) {
  return (
    <div className="bg-colormind-cards text-colormind-text px-10 py-5 rounded-2xl mb-5 hover:translate-x-4 transition-transform col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 items-center">
      <div className="col-span-12 xl:col-span-6">
        <h3 className="font-bold text-2xl">{nombre}</h3>
        <p className="underline text-base">{lugar}</p>
        <p className="text-base">{fecha}</p>
        <br />
      </div>

      <div className="col-span-12 xl:col-span-6 mx-10">
        <h4 className="text-lg font-bold underline mb-2">Funciones</h4>
        {funciones.map((func) => (
          <li key={func}>{func}</li>
        ))}
      </div>
    </div>
  );
}

CardWork.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  funciones: PropTypes.array.isRequired,
};
