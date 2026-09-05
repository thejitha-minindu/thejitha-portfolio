"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export type { Project };

export function ProjectCard({ project }: { project: Project }) {
  const isSecondary = project.isSecondary;
  const hasPreview = Boolean(project.previewImage && !isSecondary);

  return (
    <article
      className={`editorial-project-row ${isSecondary ? "secondary" : ""} ${
        hasPreview ? "has-preview" : ""
      }`}
      id={`project-${project.slug}`}
    >
      <div
        className="editorial-project-index"
        aria-label={`Project number ${project.number}`}
      >
        <span>[{project.number}]</span>
      </div>

      <div className="editorial-project-body">
        {/* 1. Project Number / Metadata Top */}
        <div className="editorial-project-meta-top">
          <div className="project-meta-left">
            <span className="project-type-tag">{project.projectType}</span>
            <span className="meta-dot">·</span>
            <span className="project-timeline-tag">{project.timeline}</span>
          </div>

          {project.status && (
            <span className="project-status-tag">{project.status}</span>
          )}
        </div>

        {/* 2. Project Title */}
        <h3 className="editorial-project-title">
          <Link href={project.route} className="project-title-link">
            {project.title}
          </Link>
        </h3>

        {/* 3. Short Description */}
        <p className="editorial-project-desc">{project.description}</p>

        {/* 4. Project Preview Image (Featured Projects) */}
        {hasPreview && project.previewImage && (
          <div className="project-preview-wrap">
            <Link
              href={project.route}
              className="project-preview-link"
              aria-label={`View case study for ${project.title}`}
            >
              <div
                className="project-preview-frame"
                style={{
                  aspectRatio: (
                    project.previewImage.aspectRatio || "16/9"
                  ).replace("/", " / "),
                }}
              >
                <Image
                  src={project.previewImage.src}
                  alt={project.previewImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 860px"
                  priority={project.number === "01"}
                  className="project-preview-image"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-preview-overlay">
                  <span className="preview-action-tag">
                    <span>EXPLORE ARTIFACTS</span>
                    <span className="preview-arrow">↗</span>
                  </span>
                  {project.previewImage.caption && (
                    <span className="preview-hover-caption">
                      {project.previewImage.caption}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 5. Contribution */}
        <div className="editorial-contribution-box">
          <span className="contribution-heading">MY CONTRIBUTION</span>
          <p className="contribution-text">{project.myContribution}</p>
        </div>

        {/* 6. Technologies + View Case Study Link */}
        <div className="editorial-project-footer">
          <div className="tech-tags-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <Link href={project.route} className="case-study-link">
            <span>VIEW CASE STUDY</span>
            <span className="case-study-arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
