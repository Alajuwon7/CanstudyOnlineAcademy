'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Courses", "Instructors", "Testimonials", "Blog", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-shell">
        <div className="logo">
          <span className="dot" aria-hidden />
          <div>
            <strong>Canstudy</strong>
            <small>Online Academy</small>
          </div>
        </div>
        <button className="hamburger" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <div className={`links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
        <div className="cta">
          <a className="phone" href="tel:+1800222000">
            1 800 222 000
          </a>
          <a className="pill small" href="#contact">
            Contact us
          </a>
        </div>
      </nav>

      <style jsx>{`
        header {
          background: transparent;
          transition: all 0.25s ease;
        }
        header.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
        }
        .nav-shell {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 18px 4vw;
          color: #fff;
        }
        header.scrolled .nav-shell {
          color: var(--navy);
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }
        .logo small {
          display: block;
          font-weight: 500;
          color: inherit;
          opacity: 0.8;
          margin-top: 2px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--orange);
        }
        .links {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .links a {
          color: inherit;
          font-weight: 600;
        }
        .cta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .phone {
          color: inherit;
          font-weight: 700;
          text-decoration: none;
        }
        .hamburger {
          display: none;
          background: none;
          font-size: 22px;
          color: inherit;
        }
        @media (max-width: 960px) {
          .nav-shell {
            grid-template-columns: auto auto 1fr;
          }
          .cta {
            display: none;
          }
        }
        @media (max-width: 720px) {
          .nav-shell {
            grid-template-columns: auto auto;
          }
          .hamburger {
            display: inline-flex;
          }
          .links {
            display: ${open ? "flex" : "none"};
            flex-direction: column;
            grid-column: 1 / -1;
            background: rgba(255, 255, 255, 0.95);
            padding: 12px 0 4px;
          }
          header:not(.scrolled) .links {
            background: rgba(13, 31, 58, 0.92);
            color: #fff;
          }
        }
      `}</style>
    </header>
  );
}
