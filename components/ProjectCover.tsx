"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectMediaItemData } from "@/types/project";
import { MediaLightbox } from "@/components/MediaLightbox";

interface ProjectCoverProps {
  cover?: ProjectMediaItemData;
  projectTitle: string;
}

export function ProjectCover({ cover, projectTitle }: ProjectCoverProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!cover) return null;

  return (
    <>
      <div className="container project-cover-container">
        <div className="project-cover-frame">
          <button
            type="button"
            className="project-cover-clickable"
            onClick={() => setIsLightboxOpen(true)}
            aria-label={`Open hero image preview for ${projectTitle}`}
          >
            <div className="project-cover-image-wrap">
              <Image
                src={cover.src}
                alt={cover.alt || `${projectTitle} cover`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                className="project-cover-image"
                style={{ objectFit: "cover" }}
              />
              <div className="project-cover-overlay">
                <span className="cover-expand-badge">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  <span>VIEW FULL RESOLUTION</span>
                </span>
              </div>
            </div>
          </button>
        </div>

        {cover.caption && (
          <div className="project-cover-caption">
            <span className="caption-tag">PREVIEW</span>
            <span className="caption-dot">·</span>
            <span>{cover.caption}</span>
          </div>
        )}
      </div>

      <MediaLightbox
        items={[cover]}
        currentIndex={0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}
