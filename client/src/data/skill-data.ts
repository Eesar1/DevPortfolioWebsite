export type SkillCategory = {
  title: string;
  icon: string;
  skills: {
    name: string;
    percentage: number;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "JavaScript / TypeScript", percentage: 95 },
      { name: "React / Next.js", percentage: 90 },
      { name: "HTML5 / CSS3", percentage: 95 },
      { name: "CSS Frameworks (Tailwind, SCSS)", percentage: 92 },
    ],
  },
  {
    title: "Backend Development",
    icon: "ri-server-line",
    skills: [
      { name: "Node.js / Express", percentage: 88 },
      { name: "MongoDB / PostgreSQL", percentage: 85 },
      { name: "GraphQL / REST APIs", percentage: 90 },
      { name: "AWS / Firebase", percentage: 80 },
    ],
  },
];

export const otherSkills: string[] = [
  "Git & GitHub",
  "Docker",
  "CI/CD",
  "Redux",
  "Jest & Testing",
  "Responsive Design",
  "Web Accessibility",
  "Performance Optimization",
  "SEO",
  "UI/UX Design",
  "Figma",
  "Agile Methodology"
];

export const stats = [
  {
    icon: "ri-time-line",
    value: "5+ Years",
    label: "Professional Experience"
  },
  {
    icon: "ri-folder-line",
    value: "25+ Projects",
    label: "Completed Successfully"
  },
  {
    icon: "ri-user-smile-line",
    value: "15+ Clients",
    label: "Satisfied Worldwide"
  }
];
