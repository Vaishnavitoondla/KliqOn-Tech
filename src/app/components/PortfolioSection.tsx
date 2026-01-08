import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useInView} from "motion/react";
import {PortfolioHeroSection} from './PortfolioHeroSection';
import {PortfolioCard} from './PortfolioCard';
import { portfolioData } from "../data/portfolioData";
import type { PortfolioItem } from "../data/portfolioData";
import "../../styles/portfolio.css";

/* ---------- Animated Stat Component ---------- */

function Stat({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="stat-card"
    >
      <h3><span className="stat-line">{count} </span> + </h3>
      <p>{label}</p>
    </motion.div>
  );
}


/* ---------- Main Component ---------- */
export function PortfolioSection() {
  const [active, setActive] = useState("All");

  const categories = [
  "All",
  ...Array.from(new Set(portfolioData.map(item => item.category))),
];

  const filteredData =
    active === "All"
      ? portfolioData
      : portfolioData.filter(
          (item: PortfolioItem) => item.category === active
        );

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="portfolio-section">
      {/* Header */}
        <PortfolioHeroSection />

      {/* Stats */}
     <div className="portfolio-stats-wrapper">
  <div className="portfolio-stats">
    <Stat value={30} label="Projects Delivered" />
    <Stat value={40} label="Happy Clients" />
    <Stat value={10} label="Industries Served" />
  </div>
</div>


      {/* Filters */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
          <div className="portfolio-grid bg-gradient-to-br from-[#0E1322] to-[#0023E8]/20 rounded-3xl p-4 md:p-6 lg:p-8 border border-[#0023E8]/30 shadow-2xl">
        {filteredData.map((item: PortfolioItem, index: number) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="portfolio-extra">
  <div className="portfolio-extra-content">
    <h2>
      How We Build <span>Scalable Digital Products</span>
    </h2>

    <p>
      We follow a structured, transparent, and technology-driven approach
      to deliver reliable digital solutions for startups and enterprises.
    </p>

    <ul>
      <li>Requirement analysis & solution planning</li>
      <li>UI/UX focused design approach</li>
      <li>Scalable and secure development</li>
      <li>Testing, deployment & ongoing support</li>
    </ul>
  </div>

<div className="portfolio-extra-image">
  <div className="image-bg-rotate"></div>
  <img
    src="https://cdnwe1.ltex.in/assets/img/home/tech.webp"
    alt="Technology and Engineering"
  />
</div>

</div>

    </section>
  );
}