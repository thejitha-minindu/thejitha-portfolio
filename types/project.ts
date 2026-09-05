export type ProjectMediaType = "image" | "video";
export type MediaOrientation = "landscape" | "portrait" | "square" | "wide";
export type MediaLayout = "hero" | "full" | "two-column" | "grid";

export interface ProjectMediaItemData {
  id: string;
  type: ProjectMediaType;
  src: string;
  alt: string;
  caption?: string;
  orientation?: MediaOrientation;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1", "21/9"
  layout?: MediaLayout;
  thumbnail?: string;
  width?: number;
  height?: number;
}

export interface Project {
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
  previewImage?: ProjectMediaItemData;
  coverImage?: ProjectMediaItemData;
  media?: ProjectMediaItemData[];
}
