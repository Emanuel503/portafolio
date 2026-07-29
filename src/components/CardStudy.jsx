import PropTypes from "prop-types";

export default function CardStudy({ nombre, lugar, fecha, icono: Icon }) {
  return (
    <div className="bg-colormind-cards text-colormind-text px-3 py-4 rounded-2xl mb-5 hover:translate-x-4 transition-transform col-span-12 lg:col-span-6 flex gap-2">
      <div className="flex items-center ml-3">
        <Icon className="inline mr-4 text-3xl" />
      </div>

      <div>
        <h3 className="inline text-2xl">{nombre}</h3>
        <p className="underline text-base">{lugar}</p>
        <p className="text-base">{fecha}</p>
      </div>
    </div>
  );
}

CardStudy.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  icono: PropTypes.elementType.isRequired,
};
