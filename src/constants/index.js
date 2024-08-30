import {
  ggsipu,
  du,
  bvicam,
  music,
  movie,
  techjunction,
  codingninjas,
  yumquest,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNodedotjs,
  SiMongodb,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

import { DiCss3, DiJava } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1TwPJsZw9NiwvNZFZ6bON4SNyKkci0UwA/view?usp=sharing";
export const repoLink = "https://github.com/aashiyatanwar";

export const callToAction =
  "https://www.linkedin.com/in/aashiya-tanwar-b939761b0/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },

  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: ggsipu,
    title: "Guru Gobind Singh Indraprastha University",
    degree: "Master of Computer Applications",
    duration: "September 2022 - June 2024",
    content1: "Major : Computer Applications",
  },
  {
    id: "education-2",
    icon: du,
    title: "University of Delhi",
    degree: "Bachelors of Science(Honors)",
    duration: "July 2019 - June 2022",
    content1: "Major : Computer Science",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },

      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-6",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        id: "d-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
    ],
  },
];

export const experiences = [
  
  {
    organisation:
      "Bharati Vidyapeeth's Institute of of Computer Applications and Management",
    logo: bvicam,
    link: "http://bvicam.in/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Feb 2024 - June 2024",
        content: [
          {
            text:
              "Developed Grievance Redressal System for managing student and faculty grievances, reducing the mean resolution time by 40% compared to manual processes, with secure login/signup using JWT tokens.",
            link: "",
          },
          {
            text:
              "Designed and deployed intuitive dashboards enabling users to submit, track, and monitor grievances, while providing administrators with tools to update statuses, add detailed remarks, filter grievances by various criteria, and generate comprehensive reports for streamlined grievance management.",
            link: "https://grievance-redressal-system-vfft.onrender.com/",
          },
        ],
      },
    ],
  },
  {
    organisation: "Coding Ninjas, India",
    logo: codingninjas,
    link: "https://www.codingninjas.com/",
    positions: [
      {
        title: "Teaching Assistant Intern",
        duration: "August 2020 - December 2020",
        content: [
          {
            text:
              "Mentored a batch of 50 plus students to help them with their Java and Data Structure Algorithm assignments and set problems for monthly assessments. Mentored students to improve problem solving skills.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "YumQuest",
    github: "https://github.com/aashiyatanwar/Food-Recommendation-System",
    link: "https://yumquest-g61s.onrender.com/",
    image: yumquest,
    content:
      "Built a recommendation engine that enhanced food suggestion, factoring in time, budget, and cuisine preferences. Introduced a fast search functionality that boosted item discovery speed and a user profile system that facilitated sharing 500+ recipes, increasing user engagement.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS3",
      },
      {
        id: "icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-5",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    id: "project-2",
    title: "TechJunction",
    github: "https://github.com/aashiyatanwar/TechJunction",
    link: "https://techjunction-7f3t.onrender.com/",
    image: techjunction,
    content:
      "Launched TechJunction, which drove boost in academic collaboration through knowledge sharing and peer interaction. Integrated features such as study material posting and one-on-one chat, which led to a increase in user engagement.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS3",
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-3",
    title: "Music-App",
    github: "https://github.com/aashiyatanwar/music-app",
    link: "https://musicapp-7k4i.onrender.com/",
    image: music,
    content:
      "A music streaming platform, which increase in user retention by offering personalized playlists and detailed music metadata. Deployed administrative controls that improved content management.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    id: "project-4",
    title: "Movie-App",
    github: "https://github.com/aashiyatanwar/MovieProject",
    link: "",
    image: movie,
    content:
      "Developed a dynamic front-end web application utilizing the RapidAPI IMDb API to provide comprehensive movie information and search functionality.Implemented a user-centric interface enabling in-depth exploration of movie details including ratings, cast, plot, reviews, trivia, and behind-the-scenes content",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/aashiya-tanwar-b939761b0/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/aashiyatanwar",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:tanwaraashiya12@gmail.com",
  },
];

export const aboutMe = {
  name: "Aashiya Tanwar",
  tagLine: "MCA | GGSIPU",
  intro:
    "Passionate software developer specializing in crafting intuitive and efficient web applications with a focus on MERN technologies and user-centric design",
};
