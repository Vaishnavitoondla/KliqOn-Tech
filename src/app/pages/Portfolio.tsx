import { PortfolioSection } from "../components/PortfolioSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Portfolio() {
  return (
    <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
      <Navbar />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
