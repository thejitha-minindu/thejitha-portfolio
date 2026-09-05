"use client";

import Image from "next/image";
import { ProjectMediaItemData } from "@/types/project";

interface ProjectMediaItemProps {
  item: ProjectMediaItemData;
  index: number;
  onClick: (index: number) => void;
  priority?: boolean;
}

export function ProjectMediaItem({
  item,
  index,
  onClick,
  priority = false,
}: ProjectMediaItemProps) {
  const isVideo = item.type === "video";
  const aspectRatio = item.aspectRatio || "16/9";

  return (
    <figure
      className={`project-media-item-card layout-${item.layout || "two-column"} orientation-${item.orientation || "landscape"}`}
    >
      <button
        type="button"
        className="project-media-clickable"
        onClick={() => onClick(index)}
        aria-label={`Open larger preview: ${item.caption || item.alt}`}
      >
        <div
          className="project-media-frame"
          style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
        >
          {isVideo ? (
            <video
              src={item.src}
              poster={item.thumbnail}
              className="project-media-content"
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              loading={priority ? undefined : "lazy"}
              priority={priority}
              className="project-media-content"
              style={{ objectFit: "cover" }}
            />
          )}

          <div className="project-media-hover-overlay">
            <span className="project-media-expand-badge">
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
              <span>INSPECT</span>
            </span>
          </div>
        </div>
      </button>

      {item.caption && (
        <figcaption className="project-media-caption">
          <span className="caption-marker">●</span>
          <span>{item.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
