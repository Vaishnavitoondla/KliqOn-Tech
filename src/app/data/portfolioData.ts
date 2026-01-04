export interface PortfolioItem {
  id: number;
  client: string;
  category: string;
  services: string[];
  description: string;
  link: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    client: "VD Prasad Memorial High School",
    category: "Static Website",
    services: ["Website Development", "SEO"],
    description:
      "Educational institution website designed to provide school information, admissions, and updates with a clean and responsive UI.",
    link: "https://www.vdprasadaraomemorialhighschool.in/",
  },
  {
    id: 2,
    client: "Studio Circle",
    category: "E-Commerce Website",
    services: ["E-Commerce Development", "SEO"],
    description:
      "A full-fledged e-commerce platform enabling online product browsing, ordering, and secure checkout.",
    link: "https://thestudiocircle.com/",
  },
  {
    id: 3,
    client: "Aultra Paints",
    category: "Static Website",
    services: ["Website Development", "SEO"],
    description:
      "Corporate website developed for a paint brand to showcase products, brand identity, and company information.",
    link: "https://www.aultrapaints.com/",
  },
  {
    id: 4,
    client: "Hyderabad Urology & Andrology",
    category: "Social Media & Maintenance",
    services: ["Website Maintenance", "Social Media Management"],
    description:
      "Digital presence management including website maintenance and social media handling for a medical institution.",
    link: "https://share.google/VYJIT0GRl4Wi87kXR",
  },
] as const
