type SectionLabelProps = {
  code: string;
  children: React.ReactNode;
};

export function SectionLabel({ code, children }: SectionLabelProps) {
  return (
    <div className="section-label-container">
      <div className="section-label-header">
        <span className="section-label-code">[{code}]</span>
        <div className="section-label-line" aria-hidden="true" />
      </div>
      <h2 className="section-label-title">{children}</h2>
    </div>
  );
}
