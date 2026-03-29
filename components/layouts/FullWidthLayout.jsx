"use client";

import Navbar from "../common/Navbar";
import Hero from "../common/Hero";
import Footer from "../common/Footer";
import ChipBackground from "../common/ChipBackground";
import "./Layouts.css";

export default function FullWidthLayout({ children, showHero = true }) {
  return (
    <div className="full-width-layout">
      <ChipBackground />
      <Navbar />
      {showHero && <Hero />}
      <main className="main-full-width">{children}</main>
      <Footer />
    </div>
  );
}
