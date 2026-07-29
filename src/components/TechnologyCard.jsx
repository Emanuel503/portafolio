import PropTypes from "prop-types";

export default function TechnologyCard({
    nombre,
    icono: Icon,
    color = "",
}) {
    return (
        <div className="text-colormind-text w-28 h-28 rounded-xl bg-colormind-cards border border-default-200 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
            <Icon className={`text-5xl mb-2 ${color}`} />
            <span className="text-sm font-semibold text-center">
                {nombre}
            </span>
        </div>
    );
}

TechnologyCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    icono: PropTypes.elementType.isRequired,
    color: PropTypes.string,
};