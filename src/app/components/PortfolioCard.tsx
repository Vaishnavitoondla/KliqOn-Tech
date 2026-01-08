import { motion } from "motion/react";
import type { PortfolioItem } from "../data/portfolioData";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
   <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.12, ease: "easeOut", duration: 0.6 }}
  viewport={{ once: true }}
  className="portfolio-card"
>
      <div className="card-image">
  <img src={item.image} alt={item.client} />
</div>

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
  );
}