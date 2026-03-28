"use client";

import "./Hero.css";

export default function Hero() {
  const scrollToContent = () => {
    const main = document.querySelector(".main-full-width, .main");
    if (main) {
      main.scrollIntoView({ behavior: "smooth" });
    }
  };

  const viewDemo = () => {
    window.open("https://github.com", "_blank");
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Featured Projects</h1>
          <p className="hero-subtitle">
            Explore our portfolio of projects across web, mobile, and gaming
            platforms
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContent}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={viewDemo}>
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
