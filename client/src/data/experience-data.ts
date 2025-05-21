export type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  isReversed?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: "Led frontend development for multiple web applications, implemented new features, and improved performance, resulting in a 40% increase in user engagement.",
    achievements: [
      "Optimized React application performance by 60%",
      "Migrated legacy codebase to modern React with hooks",
      "Led a team of 5 developers for major product launch"
    ]
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "WebSolutions Agency",
    period: "2021 - 2022",
    description: "Developed end-to-end web solutions for various clients, from e-commerce platforms to custom CRM systems, using React, Node.js, and MongoDB.",
    achievements: [
      "Developed 10+ responsive web applications",
      "Implemented CI/CD pipelines for automated testing",
      "Integrated payment gateways and third-party APIs"
    ],
    isReversed: true
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "StartupX",
    period: "2020 - 2021",
    description: "Built responsive user interfaces for a fast-growing SaaS startup. Collaborated with UX designers to implement and iterate on new features.",
    achievements: [
      "Implemented responsive designs with CSS/SCSS",
      "Built reusable component library with React",
      "Assisted with UX research and user testing"
    ]
  }
];

export type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    id: 1,
    degree: "MSc Computer Science",
    institution: "COMSAT University",
    period: "2027 - 2030",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors."
  },
  {
    id: 2,
    degree: "BSc Computer Science",
    institution: "Lahore Garrison University",
    period: "2023 - 2027",
    description: "Focus on programming fundamentals, algorithms, and software design principles. Participated in multiple hackathons."
  }
];
