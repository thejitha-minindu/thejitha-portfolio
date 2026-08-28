"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { CommandPalette } from "@/components/CommandPalette";
import { CVViewerModal } from "@/components/CVViewerModal";
import { RecruiterBanner } from "@/components/RecruiterBanner";

type CaseStudyShellProps = {
  children: React.ReactNode;
};

export function CaseStudyShell({ children }: CaseStudyShellProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const router = useRouter();

  return (
    <div className="portfolio-layout-root">
      <TopBar
        recruiterMode={recruiterMode}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {recruiterMode && (
        <RecruiterBanner
          onOpenCV={() => setIsCVModalOpen(true)}
          onClose={() => setRecruiterMode(false)}
        />
      )}

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectMode={(mode) => {
          if (mode === "ALL") router.push("/#work");
          else if (mode === "BUILD") router.push("/#work");
          else if (mode === "EXPLORE") router.push("/#research");
          else if (mode === "ENGINEER") router.push("/#work");
        }}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      <CVViewerModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <div className="case-study-page-wrapper">
        {children}
      </div>
    </div>
  );
}
