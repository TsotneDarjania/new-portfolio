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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  silk,
  simulator,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Practical projects",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Simultaneously with my university studies, I embarked on my initial project ventures",
      "I developed my very first program entirely from scratch.",
      "I gained valuable insights into real-world projects and the challenges they entail.",
      "Through my project work, I acquired proficiency in object-oriented coding",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - Feb 2022",
    points: [
      "I embarked on my initial real projects, predominantly centered around web development",
      "I extensively studied React and React Native, gaining substantial experience in TypeScript",
      "I've successfully completed numerous small and medium-sized web projects, leaving clients satisfied.",
    ],
  },
  {
    title: "Javascript Developer",
    company_name: "San Soft Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Silk Road Gaming",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Designed and implemented user registration, login, and authentication functionalities using" +
        "Node.js,React and MongoDB",
      "Enhanced application security by conducting thorough code reviews and implementing best practices",
      "Improved game performance by optimizing database queries and introducing efficient data structures",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "La Petite Alice",
    description:
      "Captivated by the vibrant realm of creativity, I collaborated with Ine Agresta, an accomplished artist, designer, and visionary hailing from Uruguay, now thriving in Denmark ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js,",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://lapetitealice.com/",
  },
  {
    name: "Artist – Ine Agresta",
    description:
      "Captivated by the vibrant realm of creativity, I collaborated with Ine Agresta, an accomplished artist, designer, and visionary hailing from Uruguay, now thriving in Denmark. Equipped with a formal education in fashion and textile design, Ine's artistry extends across diverse mediums, adorned with daring hues, and woven with her life's narrative",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ineagresta.com/",
  },
  {
    name: "YouTube Clone",
    description:
      " I engineered a YouTube clone website that mirrors the familiar platform's essence while infusing it with my own creative touch.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://youtube-clone-omega-self.vercel.app/",
  },
  {
    name: "Silk Road Gaming",
    description:
      "Venturing into the realm of immersive online gaming experiences, I proudly present the Silk Road Gaming website—a dynamic platform that seamlessly marries my expertise in browser game development with cutting-edge web technologies. With a portfolio brimming with HTML5 games powered by Phaser and Three.js",
    tags: [
      {
        name: "javascrit",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Phaser",
        color: "green-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
    ],
    image: silk,
    source_code_link: "https://silk-road-gaming-3g2l.vercel.app/",
  },
  {
    name: "Football Simulator",
    description:
      "Crafted with the might of React, Phaser, and a relentless thirst for knowledge, this project is a testament to my unwavering commitment to advancing my expertise in JavaScript & TypeScript.",
    tags: [
      {
        name: "javascrit",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Phaser",
        color: "green-text-gradient",
      },
    ],
    image: simulator,
    source_code_link: "https://digital-dribblers-ngci.vercel.app/game",
  },
];

export { services, technologies, experiences, testimonials, projects };
