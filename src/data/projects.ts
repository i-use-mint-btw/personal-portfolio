import easybank from "../assets/easybank.png";
import kanbanTaskManager from "../assets/kanban.png";
import portfolio from "../assets/portfolio.png";
import inkflow from "../assets/inkflow.png"

export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kanban task manager",
    description: "A full featured productivity app to help keep you organized",
    image: kanbanTaskManager,
    technologies: [
      { name: "React", color: "blue" },
      { name: "Golang", color: "green" },
      { name: "Postgres", color: "purple" },
    ],
    githubUrl: "https://github.com/i-use-mint-btw/task-manager",
    liveUrl: "https://frontend-production-a6dc.up.railway.app/",
  },
  {
    id: 2,
    title: "Inkflow",
    description:
      "Google docs like markdown editor with real time collaboration",
    image: inkflow,
    technologies: [
      { name: "Go fiber", color: "blue" },
      { name: "Websockets", color: "green" },
      { name: "Vuejs", color: "purple" },
    ],
    githubUrl: "https://github.com/i-use-mint-btw/inkflow",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "This is where you are right now",
    image: portfolio,
    technologies: [
      { name: "React", color: "blue" },
      { name: "Tailwind", color: "green" },
    ],
    githubUrl: "https://github.com/i-use-mint-btw/personal-portfolio",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Easybank website",
    description:
      "A sleek and responsive website for a fictional banking company",
    image: easybank,
    technologies: [
      { name: "Html", color: "blue" },
      { name: "Sass", color: "green" },
      { name: "Javascript", color: "purple" },
    ],
    githubUrl: "https://github.com/i-use-mint-btw/Easybank-website-FrontendMentor-",
    liveUrl: "https://easybank-website-frontend-mentor.vercel.app/",
  },
];
