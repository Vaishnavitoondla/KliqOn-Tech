export interface PortfolioItem {
  id: number;
  client: string;
  category: string;
  services: string[];
  description: string;
  link: string;
  image: string;
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
    image: "https://img.sanishtech.com/u/8f6dcea84979f1d1ef1611ef19313fa8.jpg",
  },
  {
    id: 2,
    client: "Studio Circle",
    category: "E-Commerce Website",
    services: ["E-Commerce Development", "SEO"],
    description:
      "A full-fledged e-commerce platform enabling online product browsing, ordering, and secure checkout.",
    link: "https://thestudiocircle.com/",
    image: "https://img.sanishtech.com/u/7d45a36416e9146de7800db67bf5da76.jpg",
  },
  {
    id: 3,
    client: "Aultra Paints",
    category: "Static Website",
    services: ["Website Development", "SEO"],
    description:
      "Corporate website developed for a paint brand to showcase products, brand identity, and company information.",
    link: "https://www.aultrapaints.com/",
    image: "https://img.sanishtech.com/u/a85cf019bba0e52db87affb9736a4c68.png",
  },
  {
    id: 4,
    client: "Hyderabad Urology & Andrology",
    category: "Social Media & Maintenance",
    services: ["Website Maintenance", "Social Media Management"],
    description:
      "Digital presence management including website maintenance and social media handling for a medical institution.",
    link: "https://share.google/VYJIT0GRl4Wi87kXR",
    image: "https://img.sanishtech.com/u/a2f59b94dabb41c538fe2fec5147bd54.png",
  },
] as const