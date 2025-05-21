export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "Eesar is an exceptional developer who transformed our vision into reality. His attention to detail and problem-solving skills are outstanding. We'll definitely work with him again on future projects.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder",
    company: "StyleShop",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "We hired Eesar to rebuild our outdated e-commerce platform, and the results exceeded our expectations. Not only did he deliver on time, but he also added valuable features we hadn't even considered.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Co-founder",
    company: "HealthTech",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "Eesar developed a mobile app for our startup that became central to our success. His technical expertise combined with his understanding of user experience made all the difference.",
    rating: 4.5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CTO",
    company: "FinanceFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "Working with Eesar has been a pleasure. He quickly understood our complex requirements and delivered a scalable solution that has helped us grow our business by 40% in the last year.",
    rating: 5
  }
];
