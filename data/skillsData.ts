export type SkillType = {
  name: string;
  description: string;
};

export type SectionType = {
  type: string;
  data: Array<SkillType>;
};

export const skillsData: Array<SectionType> = [
  {
    type: "Frondend Skills",
    data: [
      {
        name: "html",
        description:
          "HTML was a language that did not give me much difficulty in learning because it is a descriptive language and unlike XML, it is more intuitive. The only thing I am still working on is building websites to achieve a high SEO score",
      },
      {
        name: "css",
        description:
          "I spend most of my time during website development working with CSS. It's what gives the website a unique look and makes it more dynamic.",
      },
      {
        name: "sass",
        description:
          "I learned this language during a React developer course. It has many features that make writing CSS code more efficient and allow to avoid code redundancy.",
      },
      {
        name: "javascript",
        description:
          "At first, JavaScript was a difficult language for me to understand because I had previously worked with a statically-typed language and it was hard for me to get used to the new approach. However, over time I started getting used to the new approach and began to appreciate how many possibilities JavaScript offers me.",
      },
      {
        name: "typescript",
        description:
          "I really like TypeScript because it introduces many improvements to JavaScript and allows to catch errors at the code level. This is a very useful skill, especially for large projects. I use it in most of my applications and I intend to learn it more deeply because I know I still have a lot to learn.",
      },
      {
        name: "react",
        description:
          "React was the first framework in which I seriously started creating applications. Its advantage is that it has a low entry threshold and gives freedom in the approach to creating applications.",
      },
      {
        name: "redux",
        description:
          "I started using Redux when I was looking for a tool that would allow me to better manage application states. It took me a while to learn Redux, but the Redux Toolkit package was very helpful.",
      },
      {
        name: "vue",
        description:
          "Vue is the second framework I learned. I wanted to create an application, but try something other than React. I had the choice between Angular or Vue, and I chose Vue, and I don't regret it. I really like Vue for its simplicity in managing application states.",
      },
      {
        name: "nextjs",
        description:
          "In my opinion, Next.js is an improved version of React. The best improvements that Next.js has, in my opinion, are nested pages, the ability to build APIs, and SSR and SSG capabilities.",
      },
    ],
  },
  {
    type: "Backend Skills",
    data: [
      {
        name: "node",
        description:
          "Using Node.js, I mainly created REST API applications. I mostly used Express, JWT, and Cookies.",
      },
      {
        name: "mysql",
        description:
          "Besides MYSQL, I also used SQL Server, both based on SQL queries.",
      },
      {
        name: "mongodb",
        description:
          "One of the most frequently used databases in my projects is MongoDB. I usually use Mongoose to communicate with it.",
      },
      {
        name: "c#",
        description:
          "The first programming language I learned was C#. I used it to build REST API with ASP.NET, Unity, and console applications.",
      },
    ],
  },
  {
    type: "Others Skills",
    data: [
      {
        name: "git",
        description:
          "One of the most important skills that every programmer should master is GIT. I learned the GIT version control system while learning C#, but only later did I start to better understand it and appreciate its advantages.",
      },
      {
        name: "docker",
        description:
          "When I first encountered Docker, I couldn't find a use for it. However, I understood its use when I worked on an application and needed a SQL server. Docker allowed me to quickly set it up without much configuration.",
      },
      {
        name: "vs code",
        description:
          "This is the main code editor that I use. Previously, I used Visual Studio for coding in C#, but when I started coding in JavaScript, I had to look for a better environment, and Visual Studio Code turned out to be perfect due to its versatility.",
      },
      {
        name: "figma",
        description:
          " I started using Figma because I needed to visualize a website before starting to work on it. Figma turned out to be great because of its ease of use and being free.",
      },
    ],
  },
];
