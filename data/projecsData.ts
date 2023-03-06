export interface Project {
  title: string;
  description: string;
  skills: Array<string>;
  repo?: string;
  live?: string;
}

export const projectsList: Array<Project> = [
  {
    title: "Fullstack Restaurant Application",
    description:
      "Restaurant website when you can order dish from menu or create your own dish.",
    skills: [
      "html",
      "sass",
      "framer",
      "javascript",
      "react",
      "react-router",
      "redux",
      "node",
      "mongo",
    ],
    repo: "https://github.com/GrzegorzBanaszak/restaurant",
  },
  {
    title: "Order application",
    description:
      "This app help manage a orders from customers. Stores information about customers, suppliers, commodities and companies.",
    skills: ["typescript", "nestjs", "mongo", "vue", "sass"],
    repo: "https://github.com/GrzegorzBanaszak/order-app",
  },
  {
    title: "NodeJs API with Docker",
    description: "Goods received note API",
    skills: ["typescript", "node", "docker", "prisma", "mysql"],
    repo: "https://github.com/GrzegorzBanaszak/node-docker-ts",
  },
  {
    title: "Flower shop",
    description: "Flower shop business card website",
    skills: ["typescript", "nextjs", "html", "sass"],
    live: "https://deco-flower.netlify.app/",
  },
  {
    title: "Caught ball game",
    description: "Game where you click the ball on screen and score points",
    skills: ["typescript", "react", "html"],
    repo: "https://github.com/GrzegorzBanaszak/caught-ball",
    live: "https://grzegorzbanaszak.github.io/caught-ball/",
  },
  {
    title: "Give away used clothes website",
    description: "Website where we can collect used things",
    skills: ["javascript", "react", "html", "sass", "styled-components"],
    repo: "https://github.com/GrzegorzBanaszak/oddam_rzeczy",
    live: "https://grzegorzbanaszak.github.io/oddam_rzeczy/",
  },
  {
    title: "Family manager app",
    description:
      "Application allow to login and register new family members to management funds",
    skills: [
      "typescript",
      "node",
      "mongo",
      "html",
      "styled-components",
      "react",
      "redux",
      "react-router",
    ],
    repo: "https://github.com/GrzegorzBanaszak/family-manager-api",
  },
];

export interface ProjectData {}
