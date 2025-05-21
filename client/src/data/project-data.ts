export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  category: "Web" | "Mobile" | "UI/UX" | "All";
  details?: {
    challenge?: string;
    solution?: string;
    features?: string[];
    outcome?: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Web",
    details: {
      challenge: "Creating a scalable e-commerce platform that could handle large product catalogs and high traffic.",
      solution: "Implemented React for the frontend with server-side rendering, Node.js for the backend, and MongoDB for database with proper indexing and optimization.",
      features: [
        "User authentication and profiles",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment processing integration",
        "Order tracking and management",
        "Admin dashboard with analytics"
      ],
      outcome: "The platform increased client's sales by 45% and improved user engagement metrics."
    }
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A social networking mobile application with real-time messaging, post sharing, and user engagement features.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Mobile",
    details: {
      challenge: "Building a responsive, real-time social media app with complex state management and offline capabilities.",
      solution: "Utilized React Native for cross-platform development, Firebase for real-time database and notifications, and Redux for state management.",
      features: [
        "User profiles and social connections",
        "Real-time messaging and notifications",
        "Photo and video sharing",
        "Content discovery feed with algorithmic sorting",
        "Offline support",
        "Location-based features"
      ],
      outcome: "App reached 50,000 downloads in first month with 70% user retention rate."
    }
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "A comprehensive real estate listing platform with property search, filtering, and virtual tour features.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["Next.js", "Tailwind", "GraphQL"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Web",
    details: {
      challenge: "Creating an SEO-friendly real estate platform with complex search capabilities and interactive property tours.",
      solution: "Built with Next.js for performance and SEO, GraphQL for efficient data fetching, and implemented 3D tour integrations.",
      features: [
        "Advanced property search and filtering",
        "Interactive map-based property browsing",
        "Virtual property tours and 3D visualizations",
        "Scheduling tools for viewings",
        "Property comparison features",
        "Agent profiles and direct contact"
      ],
      outcome: "Platform attracted 15 real estate agencies as clients within 3 months of launch."
    }
  },
  {
    id: 4,
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates, task assignment, and progress tracking.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Web",
    details: {
      challenge: "Developing an intuitive task management system that would replace complex enterprise software while maintaining functionality.",
      solution: "Created a Vue.js frontend for speed and simplicity, with Express backend and PostgreSQL database for data integrity.",
      features: [
        "Drag-and-drop kanban boards",
        "Task assignment and delegation",
        "Priority and deadline management",
        "Custom workflow creation",
        "Time tracking integration",
        "Reporting and analytics"
      ],
      outcome: "System improved team productivity by 30% according to client metrics."
    }
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "A mobile fitness app with workout tracking, nutrition planning, and health metrics visualization.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["Flutter", "Firebase", "Health API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Mobile",
    details: {
      challenge: "Creating a fitness app that effectively integrated with health devices while providing personalized insights.",
      solution: "Built with Flutter for cross-platform consistency, connected to Health API for device integration, and implemented ML-based recommendations.",
      features: [
        "Workout plan creation and tracking",
        "Nutrition logging and meal planning",
        "Health metric visualization",
        "Integration with wearable devices",
        "Progress photos and body measurements",
        "Community challenges and social features"
      ],
      outcome: "App received 4.8/5 star rating with over 10,000 active monthly users."
    }
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "A cryptocurrency portfolio management application with real-time market data, analytics, and trade execution.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    technologies: ["React", "D3.js", "Web3"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    category: "Web",
    details: {
      challenge: "Building a secure, real-time cryptocurrency tracking platform with accurate data visualization and wallet integration.",
      solution: "Used React for UI, D3.js for advanced charting, and Web3 integration for wallet connectivity and transactions.",
      features: [
        "Multi-currency portfolio tracking",
        "Advanced technical analysis charts",
        "Wallet integration for direct transactions",
        "Price alerts and notifications",
        "Performance analytics and tax reporting",
        "News aggregation and sentiment analysis"
      ],
      outcome: "Platform processes over $2M in monthly trading volume with 8,000 registered users."
    }
  }
];
