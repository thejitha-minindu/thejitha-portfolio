"use client";

import Link from "next/link";

export type Project = {
  number: string;
  slug: string;
  route: string; // e.g. "/work/teablend-ai" or "/research/cosmic-web"
  title: string;
  projectType: string;
  timeline: string;
  discipline: "BUILD" | "EXPLORE" | "ENGINEER";
  description: string;
  myContribution: string;
  technologies: string[];
  status?: string;
  isSecondary?: boolean;
};

export function ProjectCard({ project }: { project: Project }) {
  const isSecondary = project.isSecondary;

  return (
    <article
      className={`editorial-project-row ${isSecondary ? "secondary" : ""}`}
      id={`project-${project.slug}`}
    >
      <div className="editorial-project-index">
        [{project.number}]
      </div>

      <div className="editorial-project-body">
        <div className="editorial-project-meta-top">
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="project-type-tag">{project.projectType}</span>
            <span style={{ color: "var(--dim)" }}>·</span>
            <span className="project-timeline-tag">{project.timeline}</span>
          </div>

          {project.status && (
            <span className="project-status-tag">{project.status}</span>
          )}
        </div>

        <h3 className="editorial-project-title">{project.title}</h3>

        <p className="editorial-project-desc">{project.description}</p>

        <div className="editorial-contribution-box">
          <strong>MY CONTRIBUTION</strong>
          {project.myContribution}
        </div>

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
            <span>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
