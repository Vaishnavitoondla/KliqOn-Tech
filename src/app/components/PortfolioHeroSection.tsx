import { motion } from "motion/react";
import "../../styles/portfolio.css";

export function PortfolioHeroSection() {
  return (
    <>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="portfolio-header"
      >
        <h2>
          Our <span>Portfolio</span>
        </h2>
        <p>
          A curated selection of projects that reflect our expertise,
          innovation, and delivery excellence.
        </p>
      </motion.div>

      {/* Hero Content */}
      <section className="portfolio-hero-wrapper">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-hero-content"
        >
       <motion.h1
  initial={{ scale: 1 }}
  whileInView={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
>
  Crafting <span>Scalable</span> & <br />
  High-Impact Digital Solutions
</motion.h1>

          <p>
            We partner with startups and enterprises to design and develop
            reliable digital products — from modern websites to
            enterprise-grade platforms.
          </p>

       <div className="portfolio-hero-tags">
  <span className="tag">Web Development</span>
  <span className="tag">UI/UX Design</span>
  <span className="tag">Enterprise Solutions</span>
  <span className="tag">Cloud-Ready Apps</span>
</div>


        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="portfolio-hero-visual"
        >
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            alt="Digital Projects Showcase"
             className="portfolio-hero-img"
          />
        </motion.div>
      </section>
    </>
  );
}