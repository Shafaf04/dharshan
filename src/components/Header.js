"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "STANDARDS", href: "/standards" },
    { label: "CONTACT", href: "/contact", isBtn: true },
  ];

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link href="/" className="logo-link" onClick={closeMobileMenu}>
          <Image 
            src="/images/logo.png" 
            alt="DharshanSkyline Contracting Logo" 
            width={240} 
            height={70} 
            style={{ objectFit: "contain", height: "46px", width: "auto" }}
            priority 
          />
        </Link>
        
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`} 
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${item.isBtn ? "nav-contact-btn" : ""} ${isActive ? "active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
