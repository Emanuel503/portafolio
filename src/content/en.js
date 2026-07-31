export default {
    portfolio: "Portfolio",
    navbar: {
        about: "About",
        projects: "Projects",
        technologies: "Technologies",
        studies: "Studies",
        works: "Jobs",
        contact: "Contact",
        closemenu: "Close menu",
        openmenu: "Open menu"
    },
    fullname: "Emanuel José Molina Zúniga",
    softwaredeveloper : "Software Developer",
    description: "Software developer committed to creating innovative solutions and applying development best practices to ensure high-quality products. Dedicated to continuous learning, constant improvement, and professional growth, with the aim of adding value to projects and contributing to the achievement of organizational goals.",
    downloadcv: "Download CV",
    contactme: "Contact Me",
    close: "Close",
    databases: "Databases",
    tools: "Tools",
    projects: [
        {
            id: "institutional",
            title: "Institutional Management System",
            description: [
                "I developed an internal web system for the Environmental Health Directorate, designed to digitize and optimize the institution's administrative processes.",
                "The application was built with Laravel and Blade and includes modules for user and employee management, roles and permissions, employee leave management, institutional vehicle management, equipment assignment and lending, asset check-out tracking, meeting room management, activity and event planning, and document management, among other features.",
                "The system centralized institutional information, improved resource management, and streamlined administrative processes by providing a secure, organized, and user-friendly solution for the institution's staff."
            ],
            technologies: ["Laravel", "JavaScript", "PHP", "Bootstrap", "MySQL"],
            urlGit: "https://github.com/Emanuel503/sistema_disam",
            urlWeb: null
        },
        {
            id: "ticketSystem",
            title: "Ticket Management System",
            description: [
                "I developed a ticket management system using Laravel, Inertia.js, and React to streamline the reporting, tracking, and resolution of incidents within the software development team at my workplace.",
                "The platform provides user, role, and permission management, as well as establishment management and user access control for each location. It also includes a comprehensive case management module, allowing users to create, assign, track, and document tickets throughout their entire lifecycle.",
                "To enhance the user experience, I implemented WebSockets to update case statuses and comments in real time, eliminating the need to refresh the page. I also integrated browser notifications to instantly inform users about new cases, assignments, and other relevant updates."
            ],
            technologies: ["Laravel", "IntertiaJs", "React", "TypeScript", "PostgresSQL"],
            urlGit: "https://github.com/Emanuel503/sistema-ticket",
            urlWeb: null
        },
        {
            id: "toyotaClone",
            title: "Toyota Website Clone",
            description: [
                "This project was developed for educational purposes to strengthen my skills in building modern user interfaces using Next.js, React, and Tailwind CSS. It consists of a frontend recreation of the Toyota website, with special attention to design, component structure, and user experience.",
                "During development, I implemented a fully responsive interface, making adjustments and refinements to ensure proper display across different screen sizes. I also optimized various aspects of the layout and design to achieve a result that closely matches the original website.",
                "This project focuses exclusively on frontend development and was created solely for learning and practice purposes. The original website belongs to Toyota and can be viewed at:",
                "https://www.toyota.com/"
            ],
            technologies: ["React", "JavaScript", "NextJs", "TailwindCSS"],
            urlGit: "https://github.com/Emanuel503/clon-toyota",
            urlWeb: "https://clon-toyota.netlify.app/"
        },
        {
            id: "taskApi",
            title: "Task Management REST API",
            description: [
                "I developed a REST API with Laravel for managing tasks, users, roles, and categories. The application allows users to create, assign, and manage tasks, as well as administer permissions and organize information through categories.",
                "The API was documented using Postman and Swagger (OpenAPI), including all endpoints, request and response examples, authentication, HTTP status codes, and an interactive interface for testing. This project demonstrates best practices in the design, development, and documentation of RESTful services."
            ],
            technologies: ["Laravel", "Swagger", "Postman", "MySQL"],
            urlGit: "https://github.com/Emanuel503/to-do-list-api",
            urlWeb: "https://mega.nz/file/tRFWVa7b#9JLkd0ms2vqNsZOKpZ_5dH5CUJzbiHOChK9YNfcATD0"
        }
    ]
}