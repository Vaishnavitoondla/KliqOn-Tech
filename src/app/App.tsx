import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CareerPage } from "./pages/CareerPage";
import { Portfolio } from "./pages/Portfolio";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
