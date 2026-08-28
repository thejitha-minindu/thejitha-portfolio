type SectionLabelProps = {
  code: string;
  children: React.ReactNode;
};

export function SectionLabel({
  code,
  children,
}: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{code}</span>
      <span>{children}</span>
    </div>
  );
}
