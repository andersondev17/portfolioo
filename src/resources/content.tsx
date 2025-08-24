import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Anderson",
  lastName: "Lopez",
  name: `Anderson Lopez`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "anderson.dev17@gmail.com",
  location: "America/Bogota",
  languages: ["Spanish", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Ready to take your digital presence to the next level?</>,
  description: (
    <>
      Let's discuss your next project.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andersondev17",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andersonlopezmartinez/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Software Developer`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  status: "published",
  headline: <>Hey there! I'm Anderson.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">GymShock</strong>
      </>
    ),
    href: "/work/GymShock",
  },
  subline: (
    <>
      A bilingual Software Developer based in Colombia,{" "}
      I craft scalable web
      <br />solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  status: "",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  email: {
    display: true,
    link: "mailto:anderson.dev17@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Colombia-based software developer who got into coding out of curiosity,
        -Wondering why shome websites felt like they were stuck in 90' while others looked like pure magic a

        Currently, I build web applications that solve real problems. My latest e-commerce project improved
        engagement by 30%—not because I used React (which I obviously did), but because I understood that
        behind every click is someone trying to buy anything at 2am.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "Taurus Flood",
        timeframe: "2023 - Present",
        role: "Data Analyst",
        achievements: [
          <>
            Developed user interfaces using React, ensuring responsive applications and APIS consumption
            Integration of tools such as JavaScript, TypeScript, HTML y CSS
          </>,
          <>
            Managed data entry and document management with high accuracy, ensuring data integrity.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Politecnico Colombiano Jaime Isaza Cadavid",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Meta",
        description: <>Studied front-end software development and programming with Javascript.</>,
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  status: "",
  // Create new project pages by adding a new .mdx file to app/projects/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  status: "",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
     {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    }
  ],
};

export { about, gallery, home, newsletter, person, social, work };

