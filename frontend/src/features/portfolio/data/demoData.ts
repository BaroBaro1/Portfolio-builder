import type { Portfolio } from "@/types/portfolio";

export const demoData: Portfolio = {
  profile: {
  id: 1,
  full_name: "Sara Benali",
  headline: "Full Stack Developer",
  bio: "Passionate Full Stack Developer specialized in building modern, scalable and user-friendly web applications. I enjoy transforming ideas into clean digital products with Laravel, React and TypeScript.",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  phone: "+213 555 123 456",
  website: "https://sarabenali.dev",
  location: "Oran, Algeria",
  slug: "sara-benali",
  created_at: "",
  updated_at: "",
},

  skills: [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: null,
  },
  {
    id: 2,
    name: "TypeScript",
    category: "Frontend",
    icon: null,
  },
  {
    id: 3,
    name: "Laravel",
    category: "Backend",
    icon: null,
  },
  {
    id: 4,
    name: "Node.js",
    category: "Backend",
    icon: null,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Frontend",
    icon: null,
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    icon: null,
  },
],

  projects: [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A complete online shopping platform with secure authentication, payments and order management.",
    thumbnail:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80",
    github_url: "https://github.com/",
    live_url: "https://example.com",
    featured: true,
    status: "published",
    display_order: 1,
    published_at: "",
    created_at: "",
    updated_at: "",
  },

  {
    id: 2,
    title: "Restaurant Management System",
    slug: "restaurant-management",
    description:
      "Digital ordering and restaurant management platform including menu, reservations and analytics.",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    github_url: "https://github.com/",
    live_url: "https://example.com",
    featured: true,
    status: "published",
    display_order: 2,
    published_at: "",
    created_at: "",
    updated_at: "",
  },

  {
    id: 3,
    title: "Healthcare Appointment System",
    slug: "healthcare-system",
    description:
      "Appointment scheduling platform connecting patients with healthcare providers.",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    github_url: "https://github.com/",
    live_url: "https://example.com",
    featured: false,
    status: "published",
    display_order: 3,
    published_at: "",
    created_at: "",
    updated_at: "",
  },

  {
    id: 4,
    title: "Business Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "Interactive dashboard with charts, KPIs and real-time business insights.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    github_url: "https://github.com/",
    live_url: "https://example.com",
    featured: false,
    status: "published",
    display_order: 4,
    published_at: "",
    created_at: "",
    updated_at: "",
  },
],
  experiences: [
    {
      id: 1,
      company: "Tech Solutions",
      position: "Senior Full Stack Developer",
      location: "London",
      description:
        "Developed enterprise web applications using Laravel and React.",
      start_date: "2022",
      end_date: null,
      is_current: true,
      display_order: 1,
      created_at: "",
      updated_at: "",
    },
  ],

  educations: [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Master",
      field_of_study: "Computer Science",
      description: "Software Engineering",
      start_date: "2018",
      end_date: "2020",
      is_current: false,
      display_order: 1,
      created_at: "",
      updated_at: "",
    },
  ],

  certificates: [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon",
      issue_date: "2024",
      expiration_date: null,
      credential_url: "https://aws.amazon.com",
      image: null,
      display_order: 1,
      created_at: "",
      updated_at: "",
    },
  ],

  social_links: [
    {
      id: 1,
      platform: "GitHub",
      url: "https://github.com",
      display_order: 1,
      created_at: "",
      updated_at: "",
    },
    {
      id: 2,
      platform: "LinkedIn",
      url: "https://linkedin.com",
      display_order: 2,
      created_at: "",
      updated_at: "",
    },
    {
      id: 3,
      platform: "Website",
      url: "https://johnanderson.dev",
      display_order: 3,
      created_at: "",
      updated_at: "",
    },
  ],
};