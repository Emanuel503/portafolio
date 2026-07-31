export default {
    portfolio: "Portafolio",
    navbar: {
        about: "Sobre mí",
        projects: "Proyectos",
        technologies: "Tecnologías",
        studies: "Estudios",
        jobs: "Trabajos",
        contact: "Contacto",
        closemenu: "Cerrar menu",
        openmenu: "Abrir menu"
    },
    fullname: "Emanuel José Molina Zúniga",
    softwaredeveloper : "Desarrolador de software",
    description: "Desarrollador de software comprometido con la creación de soluciones innovadoras, aplicando buenas prácticas de desarrollo para garantizar productos de alta calidad. Orientado al aprendizaje continuo, la mejora constante y el crecimiento profesional, con el objetivo de aportar valor a los proyectos y contribuir al logro de los objetivos de la organización.",
    downloadcv: "Descargar CV",
    contactme: "Contáctame",
    close: "Cerrar",
    databases: "Bases de datos",
    tools: "Herramientas",
    responsibilities: "Responsabilidades",
    writetome: "Escríbeme",
    sendemail: "Enviar Email",
    socialnetworks: "Redes sociales",
    next: "Siguiente",
    previous: "Anterior",
    projects: [
        {
            id: "institutional",
            title: "Sistema de Gestión Institucional",
            description: [
                "Desarrollé un sistema web interno para la Dirección de Salud Ambiental, diseñado para digitalizar y optimizar la gestión de los procesos administrativos de la institución.",
                "La aplicación fue desarrollada con Laravel y Blade, e integra módulos para la administración de usuarios, empleados, roles y permisos, control de permisos laborales, gestión de vehículos institucionales, asignación y préstamo de equipos, registro de salidas de activos, administración de salas de reuniones, planificación de actividades y eventos, y control documental, entre otras funcionalidades.",
                "El sistema permitió centralizar la información, mejorar el control de los recursos institucionales y agilizar los procesos administrativos, proporcionando una solución segura, organizada y fácil de utilizar para el personal de la institución."
            ],
            technologies: ["Laravel", "JavaScript", "PHP", "Bootstrap", "MySQL"],
            urlGit: "https://github.com/Emanuel503/sistema_disam",
            urlWeb: null
        },
        {
            id: "ticketSystem",
            title: "Sistema de Gestión de Tickets",
            description: [
                "Desarrollé un sistema de gestión de tickets utilizando Laravel, Inertia.js y React, con el objetivo de optimizar el proceso de reporte, seguimiento y resolución de incidencias dentro del área de desarrollo de mi lugar de trabajo.",
                "La plataforma permite la administración de usuarios, roles y permisos, así como la gestión de establecimientos y el control de los accesos de los usuarios a cada uno de ellos. Además, incorpora un completo módulo para la gestión de casos, donde es posible crear, asignar, dar seguimiento y documentar cada ticket durante todo su ciclo de vida.",
                "Para mejorar la experiencia de uso, implementé WebSockets para actualizar en tiempo real el estado de los casos y los comentarios, evitando la necesidad de recargar la página. También integré notificaciones del navegador, permitiendo informar a los usuarios de manera inmediata sobre nuevos casos, asignaciones o actualizaciones relevantes."
            ],
            technologies: ["Laravel", "IntertiaJs", "React", "TypeScript", "PostgresSQL"],
            urlGit: "https://github.com/Emanuel503/sistema-ticket",
            urlWeb: null
        },
        {
            id: "toyotaClone",
            title: "Clon de Sitio Web de Toyota",
            description: [
                "Este proyecto fue desarrollado con fines educativos para fortalecer mis habilidades en el desarrollo de interfaces modernas utilizando Next.js, React y Tailwind CSS. Consiste en la recreación del frontend del sitio web de Toyota, prestando especial atención al diseño, la estructura de los componentes y la experiencia de usuario.",
                "Durante el desarrollo, trabajé en la implementación de una interfaz completamente responsiva, realizando ajustes y correcciones para garantizar una correcta visualización en diferentes tamaños de pantalla. Además, optimicé diversos aspectos del diseño y la maquetación para lograr un resultado más fiel al sitio original.",
                "Este proyecto se enfoca exclusivamente en el desarrollo del frontend y fue realizado únicamente con fines de aprendizaje y práctica. El sitio original pertenece a Toyota y puede consultarse en:",
                "https://www.toyota.com/"
            ],
            technologies: ["React", "JavaScript", "NextJs", "TailwindCSS"],
            urlGit: "https://github.com/Emanuel503/clon-toyota",
            urlWeb: "https://clon-toyota.netlify.app/"
        },
        {
            id: "taskApi",
            title: "API REST para Gestión de Tareas",
            description: [
                "Desarrollé una API REST con Laravel para la administración de tareas, usuarios, roles y categorías. La aplicación permite crear, asignar y gestionar tareas, así como administrar permisos y la organización de la información mediante categorías.",
                "La API fue documentada utilizando Postman y Swagger (OpenAPI), incluyendo todos los endpoints, ejemplos de solicitudes y respuestas, autenticación, códigos de estado HTTP y una interfaz interactiva para realizar pruebas. Este proyecto refleja buenas prácticas en el diseño, desarrollo y documentación de servicios RESTful."
            ],
            technologies: ["Laravel", "Swagger", "Postman", "MySQL"],
            urlGit: "https://github.com/Emanuel503/to-do-list-api",
            urlWeb: "https://mega.nz/file/tRFWVa7b#9JLkd0ms2vqNsZOKpZ_5dH5CUJzbiHOChK9YNfcATD0"
        },
    ],
    studies: [
        {
            title: "Curso de Ingles Intermedio.",
            place: "English4Callcenters",
            daterange: "Ene 2025 - Dic 2025",
            type: "course"
        },
        {
            title: "Técnico en ingeniería en computación.",
            place: "Universidad Don Bosco",
            daterange: "Ene 2021 - Jun 2023",
            type: "univeristy"
        },
        {
            title: "Curso de MERN",
            place: "Udemy",
            daterange: "Ene 2020 - Nov 2020",
            type: "course"
        },
        {
            title: "Técnico en desarrollo de software.",
            place: "Colegio El Espíritu Santo",
            daterange: "Ene 2018 - Nov 2020",
            type: "highschool"
        },
        {
            title: "Curso en CCNA Routing and Switching",
            place: "Cisco Systems",
            daterange: "Ene 2020 - Nov 2020",
            type: "course"
        },
        {
            title: "Curso de It Essentials",
            place: "Cisco Systems",
            daterange: "Ene 2019 - Nov 2019",
            type: "course"
        },
    ],
    jobs: [
        {
            title: "Desarrollador de software: Full Stack",
            place: "Ministerio de Salud",
            daterange: "2023 - Actualmente",
            responsibilities: [
                "Desarrollo, mantenimiento y mejora de aplicaciones web utilizando Laravel, Symfony, Next.js, React y Vue.js.",
                "Diseño e implementación de nuevas funcionalidades, así como optimización y corrección de sistemas existentes.",
                "Administración y consulta de bases de datos relacionales y no relacionales, incluyendo elaboración y optimización de consultas SQL.",
            ]
        },
        {
            title: "Técnico Informático Full Stack",
            place: "Dirección de Salud Ambiental",
            daterange: "2022",
            responsibilities: [
                "Desarrollo y mantenimiento del sistema web de administración institucional utilizando Laravel.",
                "Soporte técnico a usuarios, incluyendo diagnóstico y resolución de problemas en equipos de escritorio, laptops, impresoras y otros dispositivos informáticos.",
                "Apoyo en la instalación y configuración de software, sistemas operativos y periféricos según las necesidades institucionales",
            ]
        }
    ]
}