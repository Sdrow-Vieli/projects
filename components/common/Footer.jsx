"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>About Lindocode Digital</h4>
            <p>
              Creating beautiful, responsive web components with Next.js and
              modern CSS.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">API Reference</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@lindocode.com</p>
            <p>GitHub: github.com/Lindocode</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 NextStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
