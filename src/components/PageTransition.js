"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`page-transition-wrapper ${animating ? "is-entering" : "entered"}`}>
      {/* Top Sweep Accent Line */}
      <div className="page-load-line"></div>
      
      {/* Subtle Page Flash Curtain */}
      <div className="page-curtain"></div>

      {children}
    </div>
  );
}
