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
        Recent project: <strong className="ml-4">AI Fitness App</strong>
      </>
    ),
    href: "/work/GymShock",
  },
  subline: (
    <>
      A bilingual Software Developer based in Colombia,{" "}
      <br />  
      specializing in scalable SaaS platforms and AI-driven products using Next.js and Node.js.

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
        -Wondering why some websites felt like they were stuck in 90' while others looked like pure magic.
        <br />
        I focus heavily on real results. My latest e-commerce project improved
        engagement by 30%—not because I used React (which I obviously did), but because I understood that
        behind every click is someone trying to buy anything at 2am.
        <br />
         I like taking ideas from the first concept all
        the way to a polished product—whether that means designing a clean React interface or structuring reliable
        backend microservices or server actions.
        <br />
        My goal is always the same: create fast, scalable, and meaningful tools that people actually enjoy using.
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
            Developed TypeScript APIs integrating legacy database systems with modern React frontend, reducing data entry time by 40%. 
          </>,
          <>
            Worked across technical and operational workflows, including documentation validation, compliance checks, and internal tooling.
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
        description: <>B.S. in Informatics Engineering (Expected 2026).</>,
      },
      {
        name: "Meta",
        description: <>Meta Front-End Developer Professional Certificate, Remote <br />
                       Meta Programming with JavaScript, Remote
                       Meta HTML and CSS certification, Remote
                </>,
      },
      {
        name: "Colombo Americano",
        description: <>Ingles C1, Medellín, Antioquia.  (2019)</>,
      }, 
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Works by – ${person.name}`,
  description: `Discover my latest projects where design, technology, and creativity come together to craft engaging digital experiences.`,
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

