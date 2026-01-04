import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgDownload1 from "figma:asset/83162c82792c82cd0187b92d4551c788772c65c7.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsShrunk(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToRoute = (route: string) => {
    if (route.startsWith("/")) {
      navigate(route);
      return;
    }

    const scrollToHash = () => {
      const el = document.querySelector(route);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToHash, 150);
    } else {
      scrollToHash();
    }
  };

  const menuItems = ["Services", "Products", "About Us", "Career", "Portfolio"];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out ${
        isShrunk ? "w-[90%] md:w-[90%] max-w-[1200px] top-1 md:top-2" : "w-[100%] md:w-[100%] max-w-[1800px]"
      }`}
      style={{ willChange: "width, padding" }}
          >
      <div
        className={`relative bg-gradient-to-r from-[#0E1322]/40 to-[#0023E8]/20 backdrop-blur-xl border-t border-b border-[#B7B8BC]/20 ${mobileMenuOpen ? "rounded-xl" : isShrunk ? "rounded-full" : "rounded-none"} ${isShrunk ? "px-4 md:px-8" : "px-0"} ${mobileMenuOpen ? "h-auto py-4" : isShrunk ? "h-14 md:h-18" : "h-20 md:h-24"} shadow-2xl transition-all duration-700 ease-in-out`}
      >
        <div className={`flex items-center justify-between ${isShrunk ? "" : "h-full"}`}>
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className={`z-10 ${isShrunk ? "" : "pl-4 md:pl-8"}`}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center z-10 cursor-pointer">
              <img src={imgDownload1} alt="Logo" className="h-14 md:h-18 w-auto rounded-lg" />
            </motion.div>
          </a>

          {/* Center Menu - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-6 xl:gap-8">
            {menuItems.map((item, index) => {
              const getRoute = (item: string) => {
                if (item === "Products") return "/products";
                if (item === "Career") return "/career";
                if (item === "Services") return "#services";
                if (item === "About Us") return "#about-us";
                if (item === "Portfolio") return "/portfolio";
                return `#${item.toLowerCase().replace(" ", "-")}`;
              };

              return (
                <motion.a
                  key={item}
                  href={getRoute(item)}
                  onClick={(e) => {
                    e.preventDefault();
                    goToRoute(getRoute(item));
                  }}
                  className="text-[#F3F3F3] text-base xl:text-lg cursor-pointer relative whitespace-nowrap"
                  whileHover={{ scale: 1.1, color: "#0023E8" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#0023E8]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#F3F3F3] p-2 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Contact Button - Desktop */}
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 35, 232, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block bg-[#0023E8] text-[#F3F3F3] px-4 xl:px-6 py-2 rounded-full text-sm xl:text-base ${isShrunk ? "" : "mr-4 md:mr-8"}`}
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-[#B7B8BC]/20 bg-gradient-to-r from-[#0E1322]/40 to-[#0023E8]/20 backdrop-blur-xl rounded-b-xl"
          >
            <div className="flex flex-col gap-4 px-4">
              {menuItems.map((item) => {
                const getRoute = (item: string) => {
                  if (item === "Products") return "/products";
                  if (item === "Career") return "/career";
                  if (item === "Services") return "#services";
                  if (item === "About Us") return "#about-us";
                  if (item === "Portfolio") return "/portfolio";
                  return `#${item.toLowerCase().replace(" ", "-")}`;
                };

                return (
                  <a
                    key={item}
                    href={getRoute(item)}
                    onClick={(e) => {
                      e.preventDefault();
                      goToRoute(getRoute(item));
                      setMobileMenuOpen(false);
                    }}
                    className="text-[#F3F3F3] text-base py-2"
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  navigate("/contact");
                  setMobileMenuOpen(false);
                }}
                className="bg-[#0023E8] text-[#F3F3F3] px-6 py-2 rounded-full text-base w-full"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}