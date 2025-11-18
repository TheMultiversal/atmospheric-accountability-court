import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Patents from "./pages/Patents";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}