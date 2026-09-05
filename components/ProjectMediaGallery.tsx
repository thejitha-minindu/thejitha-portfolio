"use client";

import { useState } from "react";
import { ProjectMediaItemData } from "@/types/project";
import { ProjectMediaItem } from "@/components/ProjectMediaItem";
import { MediaLightbox } from "@/components/MediaLightbox";

interface ProjectMediaGalleryProps {
  media?: ProjectMediaItemData[];
  sectionNumber?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  description?: string;
}

export function ProjectMediaGallery({
  media,
  sectionNumber = "05",
  sectionTitle = "SYSTEM GALLERY & ARTIFACTS",
  sectionSubtitle = "AUTHENTIC SCREENSHOTS & IMPLEMENTATION ARTIFACTS",
  description,
}: ProjectMediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gracefully omit the media gallery if no media exists (no fake placeholders!)
  if (!media || media.length === 0) {
    return null;
  }

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section className="container cs-content-section project-gallery-section">
      <div className="cs-section-heading">
        <span>{sectionNumber} / {sectionTitle}</span>
        <span>{sectionSubtitle}</span>
      </div>

      {description && (
        <div className="cs-text-body">
          <p>{description}</p>
        </div>
      )}

      <div className="project-gallery-grid">
        {media.map((item, index) => (
          <ProjectMediaItem
            key={item.id || index}
            item={item}
            index={index}
            onClick={handleOpenLightbox}
            priority={index < 2}
          />
        ))}
      </div>

      <MediaLightbox
        items={media}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}
