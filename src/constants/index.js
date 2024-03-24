import { prd, upwork } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    bootstrap,
    git,
    github,
    html,
    javascript,
    linkedin,
    strapi,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "bootstrap",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: strapi,
        name: "Strapi",
        type: "Backend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Upwork Freelancer",
        icon: upwork,
        iconBg: "#fbc3bc",
        date: "Sep 2021 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "PRD Oil & Gas",
        icon: prd,
        iconBg: "#accbe1",
        date: "Feb 2023 - Mar 2024",
        points: [
            "Designing a presentation involves crafting a series of interactive slides using React components, incorporating Tailwind CSS for modern styling, and implementing GSAP animations to seamlessly enhance transitions and engage users with dynamic visual elements, ultimately creating an immersive and visually appealing experience.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Upwork Freelancer",
        icon: upwork,
        iconBg: "#b7e4c7",
        date: "Mar 2024 - Present",
        points: [
            "Experienced Web Developer React proficient in HTML, CSS, Bootstrap, Tailwind CSS, and Sass for design. Specializing in dynamic web development, I bring expertise in JavaScript with React.js/Redux Toolkit/Thunk and Next.js. Additionally, I am well-versed in unit testing with Jest, CI/CD pipeline implementation, and have hands-on experience with Strapi CMS.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mohamed-hassaan3',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohamed-hassaan3',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Jacky E-Commerce',
        description: 'Developed a dynamic e-commerce platform using React and Redux, featuring real-time stock management, coupon discount calculations, shipping charge estimations, and a smooth user interface.',
        link: 'https://github.com/mohamed-hassaan3/commerce-jacky',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Landing page Real-Estate',
        description: 'Designing a presentation involves crafting a series of interactive slides using React components, incorporating Tailwind CSS for modern styling, and implementing GSAP animations to seamlessly enhance transitions and engage users.',
        link: 'https://github.com/mohamed-hassaan3/oia-properties',
    }/* ,
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'automotive landing pages',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/mohamed-hassaan3/Future-Vehicle',
    } */,
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Management Tasks',
        description: 'Build a simple React App included Router and Validation User Signing (URL).',
        link: 'https://github.com/mohamed-hassaan3/management-tasks',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/mohamed-hassaan3/kiblis-real-estate',
    }/* ,
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/mohamed-hassaan3/management-tasks',
    } */
];