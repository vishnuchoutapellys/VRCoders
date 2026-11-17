import {
  Accessibility,
  Bot,
  Cloud,
  Code2,
  Layers3,
  LifeBuoy,
  Smartphone,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

import nsrLogo from "../assets/client-nsr.webp";
import rudraSolarLogo from "../assets/client-rudra.webp";
import weddingLogo from "../assets/client-wedding.webp";
import primaSoftLogo from "../assets/client-primasoft.webp";
import vishnuPortrait from "../assets/vishnu.jpeg";
import krishnaPortrait from "../assets/krishna.jpeg";
import vyasPortrait from "../assets/vyas.jpeg";

export const clients = [
  { name: "NSR Impulse", logo: nsrLogo },
  { name: "Rudra Solar", logo: rudraSolarLogo },
  { name: "GPR Cultural Committee" },
  { name: "Wedding.com", logo: weddingLogo },
  { name: "PrimaSoft", logo: primaSoftLogo },
];

export const valuePillars = [
  { number: "01", title: "Build", description: "Turn ideas into digital products." },
  { number: "02", title: "Modernize", description: "Upgrade legacy systems with confidence." },
  { number: "03", title: "Scale", description: "Create technology ready for what comes next." },
  { number: "04", title: "Support", description: "Keep applications running and improving." },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { title: "Web Development", description: "Fast, accessible web experiences built around your customers and business goals.", icon: Code2 },
  { title: "Mobile App Development", description: "Thoughtful mobile products for the moments that matter, on iOS and Android.", icon: Smartphone },
  { title: "Custom Software", description: "Purpose-built systems that fit the way your business actually works.", icon: Layers3 },
  { title: "AI & Automation", description: "Practical AI and automation that turn repetitive work into useful outcomes.", icon: Bot },
  { title: "Cloud & DevOps", description: "Reliable cloud foundations and delivery workflows built to evolve.", icon: Cloud },
  { title: "QA & Testing", description: "Quality engineering that helps teams ship with clarity and confidence.", icon: TestTube2 },
  { title: "Accessibility", description: "Inclusive digital experiences designed for more people to use.", icon: Accessibility },
  { title: "Maintenance & Support", description: "Steady improvements, fixes and care for software already in the world.", icon: LifeBuoy },
];

export const aiCapabilities = ["AI Applications", "AI Agents", "LLM Integration", "RAG", "Business Automation"];

export const technologyGroups = [
  { name: "Frontend", technologies: ["React", "Angular", "Next.js", "TypeScript"] },
  { name: "Backend", technologies: ["Node.js", "Python", "PHP"] },
  { name: "Mobile", technologies: ["Flutter", "React Native", "Android", "iOS"] },
  { name: "Database", technologies: ["PostgreSQL", "MySQL", "SQL Server"] },
  // { name: "AI", technologies: ["Generative AI", "LLM", "RAG", "AI Agents"] },
];

export const processSteps = [
  { title: "Discover", description: "We learn your goals, users, and the challenges to solve." },
  { title: "Design", description: "We shape a clear plan and experience around your needs." },
  { title: "Build", description: "We develop your solution in focused, visible steps." },
  { title: "Test", description: "We check quality, usability, and reliability before release." },
  { title: "Launch", description: "We prepare your product for a smooth release." },
  { title: "Support", description: "We maintain and improve your product as you grow." },
];

export const reasons = [
  "Technology Agnostic",
  "End-to-End Engineering",
  "Scalable Architecture",
  "Quality First",
  "Transparent Communication",
  "Long-Term Support",
];

export const leadership = [
  {
    name: "Vishnu Choutapelly",
    role: "Founder & CEO",
    description: "Sets the company’s direction, leads its growth, and builds lasting client partnerships.",
    image: vishnuPortrait,
  },
  {
    name: "Tadepu Krishna",
    role: "Co-Founder & COO",
    description: "Leads day-to-day operations and helps turn company plans into reliable delivery.",
    image: krishnaPortrait,
  },
  {
    name: "Narayan Dath Vyas",
    role: "Co-Founder & CTO",
    description: "Guides technology strategy and the engineering decisions behind client solutions.",
    image: vyasPortrait,
  },
];

export const supportServices = [
  "Application Maintenance",
  "Bug Fixing",
  "Security Updates",
  "Performance Optimization",
  "Feature Enhancements",
  "Technical Support",
];
