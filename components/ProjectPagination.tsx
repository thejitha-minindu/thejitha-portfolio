import Link from "next/link";

export type ProjectNavTarget = {
  title: string;
  route: string;
  type?: string;
};

type ProjectPaginationProps = {
  previous?: ProjectNavTarget;
  next?: ProjectNavTarget;
  returnRoute?: string;
  returnLabel?: string;
};

export function ProjectPagination({
  previous,
  next,
  returnRoute = "/#work",
  returnLabel = "SELECTED WORK",
}: ProjectPaginationProps) {
  return (
    <nav className="project-pagination-container" aria-label="Project Navigation">
      <div className="project-pagination-inner">
        {/* Previous Link */}
        <div className="pagination-slot prev-slot">
          {previous ? (
            <Link href={previous.route} className="pagination-link prev-link">
              <span className="pagination-direction">
                <span className="pagination-arrow" aria-hidden="true">←</span>
                <span>PREVIOUS PROJECT</span>
              </span>
              <span className="pagination-title">{previous.title}</span>
            </Link>
          ) : (
            <Link href={returnRoute} className="pagination-link return-link">
              <span className="pagination-direction">
                <span className="pagination-arrow" aria-hidden="true">←</span>
                <span>RETURN TO {returnLabel}</span>
              </span>
              <span className="pagination-title">Overview</span>
            </Link>
          )}
        </div>

        {/* Center Return Badge */}
        <div className="pagination-center">
          <Link href={returnRoute} className="pagination-center-link" title={`Return to ${returnLabel}`}>
            <span>[ {returnLabel} ]</span>
          </Link>
        </div>

        {/* Next Link */}
        <div className="pagination-slot next-slot">
          {next ? (
            <Link href={next.route} className="pagination-link next-link">
              <span className="pagination-direction">
                <span>NEXT PROJECT</span>
                <span className="pagination-arrow" aria-hidden="true">→</span>
              </span>
              <span className="pagination-title">{next.title}</span>
            </Link>
          ) : (
            <Link href={returnRoute} className="pagination-link return-link next-link">
              <span className="pagination-direction">
                <span>RETURN TO {returnLabel}</span>
                <span className="pagination-arrow" aria-hidden="true">→</span>
              </span>
              <span className="pagination-title">Overview</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
