"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link
            href="/"
            className="brand"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo
              size="medium"
              scale={0.6}
              postWidth={0.9}
              dotWidth={1.5}
              bulbWidth={0.7}
              headWidth={2.3}
              headPos={-1.7}
              rayPos={-0.7}
              postMargin={33}
              headColor="#ffffff"
              postColor="#ffffff"
              bulbColor="#ffffff"
              rayColor="#ffffff"
              dotColor="#C90201"
            />
            <span className="brand-text">Lindocode</span>
          </Link>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navbar-nav ${mobileMenuOpen ? "active" : ""}`}>
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
