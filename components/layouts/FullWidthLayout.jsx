"use client";

import Navbar from "../common/Navbar";
import Hero from "../common/Hero";
import Footer from "../common/Footer";
import "./Layouts.css";

export default function FullWidthLayout({ children, showHero = true }) {
  return (
    <div className="full-width-layout">
      <div className="chip-bg" aria-hidden="true">
        <svg
          id="chip-bg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g className="group">
            <path className="trace" d="M120 220 H420 Q470 220 470 270 V360" />
            <path
              className="trace delay-1"
              d="M760 180 H560 Q510 180 510 230 V320"
            />
            <path
              className="trace delay-2"
              d="M240 560 H540 Q600 560 600 500 V420"
            />

            <circle className="node" cx="420" cy="220" r="6" />
            <circle className="node" cx="470" cy="360" r="6" />
            <circle className="node" cx="760" cy="180" r="6" />
            <circle className="node" cx="600" cy="420" r="6" />
          </g>
        </svg>
      </div>

      <Navbar />
      {showHero && <Hero />}
      <main className="main-full-width">{children}</main>
      <Footer />
    </div>
  );
}
