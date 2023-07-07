import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  sass,
  git,
  figma,
  cypress,
  mp,
  najot,
  osg,
  natija,
  tiktik,
  azizrakhim,
  phanox,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Sass/SCSS",
    icon: sass,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Najot Ta'lim",
    icon: najot,
    iconBg: "#383E56",
    date: "May 2022 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, senior developers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vue.js Developer",
    company_name: "Online Service Group",
    icon: osg,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Natija LLC",
    icon: natija,
    iconBg: "#383E56",
    date: "Jul 2022 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MediaPark Group",
    icon: mp,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aziz proved me wrong.",
    name: "Jamoliddin Najmiddinov",
    designation: "HR",
    company: "MediaPark Group",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aziz does.",
    name: "Islam Tashpulatov",
    designation: "Senior Developer",
    company: "Natija LLC",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "After Aziz optimized our website, our traffic increased. We can't thank him enough!",
    name: "Islom Qurbonov",
    designation: "Team Lead",
    company: "Natija LLC",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Tik Tik",
    description:
      "Tik Tik application includes Google Auth, the ability to upload, comment on, and like the videos; filtering by categories and advanced search functionalities, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tiktik,
    source_code_link: "https://tiktik-aziz-rakhim.vercel.app",
  },
  {
    name: "Aziz Rakhim",
    description:
      "My personal portfolio aims for potential clients on Upwork and Fiverr. Built with React, Sanity, Sass and Framer Motion. Simple Responsive Portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: azizrakhim,
    source_code_link: "https://aziz-rakhim-portfolio.netlify.app",
  },
  {
    name: "Phanox",
    description:
      "Phanox application includes modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactcontextapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: phanox,
    source_code_link: "https://phanox-aziz-rakhim.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
