import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import Portfolio from "../assets/Portfolio.png";
import project5 from "../assets/project-5.png"
import project6 from "../assets/project-6.png"

export const HOME_CONTENT = `I am a passionate Web developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies and also backend technologies like HTML, CSS, JavaScript, React.js, Tailwind CSS , Typescript , Node.js , Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I’m Ganesh Mehto, a BCA graduate (May 2025) from DAV Centenary College, Faridabad, with hands-on experience in full-stack web development. I specialize in building responsive, scalable applications using React.js, Node.js, Express.js, and MongoDB, and have worked on real-world projects like Interview Prep AI (with Google Gemini AI integration) and an E-commerce backend.

I'm certified in Frontend Development and Generative AI, and continuously learn modern tools like TypeScript, Tailwind CSS, and Zustand. I’m passionate about solving real problems through clean, efficient code, and I’m actively seeking opportunities as a full-stack developer to grow and contribute in a dynamic tech environment.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "Interview Prep AI",
    image: project5,
    description:
      " I built Interview Prep AI as an AI-powered interview preparation platform using React for the frontend and Node.js + MongoDB for the backend. It integrates Google Gemini AI to generate dynamic technical questions. I implemented secure authentication with JWT, session handling, and REST APIs for managing users and files. I also designed responsive dashboards using Tailwind CSS and ensured real-time updates for a smooth user experience.",
    technologies: ["React.js", "Express.js", "Node.js","MongoDB", "Tailwind CSS", ],
  },
   {
    title: "E-commerce Backend Project",
    image: project6,
    description:
      "I built an e-commerce backend using Express.js and MongoDB. It supports user authentication with JWT, product management, and order processing. I followed REST principles and used Mongoose for schema modeling. I also implemented middleware for route protection and tested the API using Postman. It's ready to connect with a frontend built in React.",
    technologies: ["React.js", "Express.js", "Node.js","MongoDB", "Tailwind CSS", ],
  },
  {
    title: "LaslesVPN landing page",
    image: project1,
    description:
      "A single-page website built with HTML and CSS delivers all its content within a single HTML file.  Navigation and content updates are handled through clever use of CSS ",
    technologies: ["HTML", "CSS", "Figma", "Bootstrap", ],
  },
  {
    title: "Spotify Clone",
    image: project2,
    description:
      "A single-page Spotify clone is a web app mimicking Spotify's core features.  It uses JavaScript (often with frameworks like React) to dynamically update content without page reloads, creating a smooth experience. Key features include a familiar layout, playback controls, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js","Tailwind CSS"],
  },
  {
    title: "Zoro-Movie Clone",
    image: project3,
    description:
      "A single-page movie website presents a film's information and viewing options within a single HTML document.  Using JavaScript and often a framework like React. Typically, it would fetch movie data from an API (like TMDb or OMDb) .  Key features include dynamic content loading, a user-friendly interface for browsing and searching, and responsive design for various screen sizes.",
    technologies: ["HTML", "CSS","JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Shopify Clone",
    image: project4,
    description:
      "A single-page shopping website offers a complete e-commerce experience.  Leveraging JavaScript, often with frameworks like React.js . Product data is typically fetched from an API or database, allowing the site to showcase items with images, descriptions, prices, and variations.  Key features include dynamic product loading, shopping cart management, a streamlined checkout process, responsive design for various devices.",
      technologies: ["HTML", "CSS","JavaScript", "React", "Tailwind CSS"],
    },
  
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS","JavaScript", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "sec-4 faridabad Haryana India   ",
  phoneNo: "+91 9315140028",
  email: "ganeshmehto2004@gmail.com",
};