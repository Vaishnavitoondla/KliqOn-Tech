import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import type { PortfolioItem } from "../data/portfolioData";
import { useLayoutEffect } from "react";

import "../../styles/portfolio.css"

/* ---------- Animated Stat Component ---------- */
function Stat({ value, label }: { value: number; label: string }) {
 const [count, setCount] = useState(0);

useEffect(() => {
  let start = 0;
  const duration = 2800; 
  const frameRate = 16; 
  const totalSteps = duration / frameRate;
  const step = value / totalSteps;

  const counter = setInterval(() => {
    start += step;
    if (start >= value) {
      setCount(value);
      clearInterval(counter);
    } else {
      setCount(Math.floor(start));
    }
  }, frameRate);

  return () => clearInterval(counter);
}, [value]);



  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="stat-card"
    >
      <h3>{count}+</h3>
      <p>{label}</p>
    </motion.div>
  );
}

/* ---------- Main Component ---------- */
export function PortfolioSection() {
  const [active, setActive] = useState("All");
  

  const categories = ["All", "Web", "E-Commerce", "UI/UX", "Enterprise"];

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="portfolio-header"
      >
        <h2>
          Our <span>Portfolio</span>
        </h2>
        <p>
          A glimpse of projects we have delivered for our clients across
          industries.
        </p>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="portfolio-hero"
      >
        <h1>
          Building Digital <span>Experiences</span>
        </h1>
        <p>
          From static websites to full-scale e-commerce and digital growth
          solutions, we help brands grow online.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="portfolio-stats">
        <Stat value={20} label="Projects Delivered" />
        <Stat value={10} label="Happy Clients" />
        <Stat value={5} label="Industries Served" />
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
      <div className="portfolio-grid">
        {filteredData.map((item: PortfolioItem, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            className="portfolio-card"
          >
            <h3>{item.client}</h3>
            <span className="category">{item.category}</span>

            <p className="description">{item.description}</p>

            <div className="services">
              {item.services.map((service: string, i: number) => (
                <span key={i}>{service}</span>
              ))}
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
