"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ProjectMediaItemData } from "@/types/project";

interface MediaLightboxProps {
  items: ProjectMediaItemData[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function MediaLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: MediaLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const total = items.length;
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      handleNext();
    } else if (isSwipeRight) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="media-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="media-lightbox-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Controls */}
        <div className="media-lightbox-header">
          <div className="media-lightbox-counter">
            <span className="mono-label">
              [{String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}]
            </span>
          </div>

          <div className="media-lightbox-header-actions">
            <span className="lightbox-kbd-hint">ESC TO CLOSE</span>
            <button
              ref={closeButtonRef}
              type="button"
              className="media-lightbox-close-btn"
              onClick={onClose}
              aria-label="Close lightbox modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="media-lightbox-body">
          {total > 1 && (
            <button
              type="button"
              className="media-lightbox-nav-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image (Left Arrow)"
            >
              ‹
            </button>
          )}

          <div className="media-lightbox-stage">
            {currentItem.type === "video" ? (
              <video
                src={currentItem.src}
                controls
                autoPlay
                className="media-lightbox-video"
              />
            ) : (
              <div className="media-lightbox-img-wrap">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  className="media-lightbox-image"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
          </div>

          {total > 1 && (
            <button
              type="button"
              className="media-lightbox-nav-btn next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image (Right Arrow)"
            >
              ›
            </button>
          )}
        </div>

        {/* Bottom Caption & Metadata */}
        {currentItem.caption && (
          <div className="media-lightbox-footer">
            <div className="media-lightbox-caption">
              <span className="caption-dot">●</span>
              <p>{currentItem.caption}</p>
            </div>
            {total > 1 && (
              <div className="media-lightbox-nav-dots" aria-hidden="true">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`nav-dot ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => onNavigate(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
