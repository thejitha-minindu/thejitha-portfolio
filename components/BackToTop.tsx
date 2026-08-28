"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Return to top of page"
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <span className="back-to-top-arrow" aria-hidden="true">↑</span>
      <span className="back-to-top-text">TOP</span>
    </button>
  );
}
