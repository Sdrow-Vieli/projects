"use client";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "./Layouts.css";

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Navbar />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
