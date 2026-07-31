import PropTypes from "prop-types";
import { FaUniversity } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";

export default function CardStudy({ nombre, lugar, fecha, icono }) {
  const icons = {
    university: <FaUniversity className="mr-4 text-3xl" />,
    highschool: <FaSchoolFlag className="mr-4 text-3xl" />,
    course: <GiDiploma className="mr-4 text-3xl" />,
  };

  return (
    <div className="bg-colormind-cards text-colormind-text px-3 py-4 rounded-2xl mb-5 hover:translate-x-4 transition-transform col-span-12 lg:col-span-6 flex gap-2">
      <div className="flex items-center ml-3">{icons[icono]}</div>

      <div>
        <h3 className="text-2xl">{nombre}</h3>
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
  icono: PropTypes.string.isRequired,
};
