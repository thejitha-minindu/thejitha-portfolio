"use client";

import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

type LabNote = {
  id: string;
  num: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  codeSnippet: string;
  fullBody: string[];
  takeaway: string;
};

export function LabNotes() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const notes: LabNote[] = [
    {
      id: "note-01",
      num: "NOTE.01",
      tag: "EMBEDDED / HARDWARE",
      date: "2025.04",
      title: "CoreXY Kinematics: Dual-Motor Coordination & Motion Transformation",
      summary:
        "How stationary motor mounting reduces gantry moving mass and how Cartesian X-Y coordinates are transformed into coupled CoreXY motor steps.",
      codeSnippet: `// CoreXY coordinate transformation formula
void transform_corexy(float delta_x, float delta_y, long &steps_a, long &steps_b) {
    // Both motors rotate in same direction for pure X motion
    // Motors rotate in opposite directions for pure Y motion
    steps_a = lround((delta_x + delta_y) * STEPS_PER_MM);
    steps_b = lround((delta_x - delta_y) * STEPS_PER_MM);
}`,
      fullBody: [
        "In traditional Cartesian motion systems, the Y-axis motor carries the X-axis motor on its moving gantry, resulting in increased moving inertia. CoreXY architecture solves this by mounting both Motor A and Motor B firmly to the stationary frame.",
        "Because the two stepper motors share a continuous GT2 belt routing system, motion along either individual Cartesian axis requires synchronized rotation of both motors simultaneously.",
        "In our SandPlotter project, the GRBL firmware on the Arduino Uno performs real-time coordinate transformation to feed step and direction signals to the A4988 motor drivers, while the ESP32 coordinates wireless G-code command transmission.",
      ],
      takeaway:
        "Coupled CoreXY kinematics eliminates moving motor mass, enabling responsive vector tracing when driven by dedicated motion firmware.",
    },
    {
      id: "note-02",
      num: "NOTE.02",
      tag: "FULL-STACK / SYSTEMS",
      date: "2026.02",
      title: "Designing Role-Based Access and Seller Workflows in TeaBlendAI",
      summary:
        "Structuring modular auction workflows, seller cataloging pipelines, and relational database schemas with FastAPI and Next.js.",
      codeSnippet: `# FastAPI role-based dependency validation
async function verify_seller_role(current_user: User = Depends(get_current_user)):
    if current_user.role not in ["seller", "admin"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access restricted to authorized sellers"
        )
    return current_user`,
      fullBody: [
        "Modernizing traditional tea trading workflows requires structured digital representations of estate profiles, leaf grades, and auction schedules.",
        "In the TeaBlendAI Seller Module, we separated estate onboarding, tea lot submission, and reserve price management into structured workflows backed by FastAPI endpoints and an MSSQL relational database.",
        "Role-based access control (RBAC) ensures tea producers have full control over cataloging their lots and monitoring scheduled auctions while preventing unauthorized access to bidding operations.",
      ],
      takeaway:
        "Decoupled frontend-backend boundaries with clear RBAC provide secure, maintainable foundations for domain-specific marketplace platforms.",
    },
    {
      id: "note-03",
      num: "NOTE.03",
      tag: "AI / RESEARCH",
      date: "2026.03",
      title: "Investigating U-Net Architectures for Astronomical Density Field Reconstruction",
      summary:
        "Why encoder-decoder U-Net networks with skip connections are effective for learning spatial structures across multi-scale cosmological fields.",
      codeSnippet: `# PyTorch 3D U-Net architectural block with skip connection
class DoubleConv(nn.Module):
    def __init__(self, in_ch, out_ch):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv3d(in_ch, out_ch, kernel_size=3, padding=1),
            nn.BatchNorm3d(out_ch),
            nn.LeakyReLU(0.2, inplace=True),
            nn.Conv3d(out_ch, out_ch, kernel_size=3, padding=1),
            nn.BatchNorm3d(out_ch),
            nn.LeakyReLU(0.2, inplace=True)
        )
    def forward(self, x):
        return self.conv(x)`,
      fullBody: [
        "Astrophysical dark matter distributions form a complex, filamentary network known as the Cosmic Web. Because dark matter cannot be directly observed, we investigate deep learning methods to reconstruct continuous density fields from observable astronomical tracers.",
        "Standard convolutional downsampling can lose thin spatial filament connectivity during pooling stages. U-Net architectures address this by utilizing skip connections that pass localized spatial feature maps directly from the contracting path to the expanding decoder.",
        "Our ongoing research investigates how various loss formulations and U-Net configurations perform in capturing both dense gravitational clusters and sparse filamentary bridges.",
      ],
      takeaway:
        "Skip connections in U-Net architectures allow models to learn multi-scale representations while preserving spatial context.",
    },
    {
      id: "note-04",
      num: "NOTE.04",
      tag: "CYBERSECURITY / CTF",
      date: "2025.10",
      title: "Linux Capability Auditing: Analyzing CAP_SETUID in CTF Environments",
      summary:
        "Why security reviews must audit extended POSIX file capabilities alongside traditional SUID permissions to identify privilege escalation risks.",
      codeSnippet: `# Auditing POSIX file capabilities across Linux directories
$ getcap -r / 2>/dev/null
/usr/bin/python3.10 = cap_setuid+ep

# Privilege escalation demonstration:
$ python3.10 -c 'import os; os.setuid(0); os.system("/bin/sh")'
# id -> uid=0(root) gid=0(root)

# Remediation command:
$ sudo setcap -r /usr/bin/python3.10`,
      fullBody: [
        "Traditional Linux privilege auditing focuses heavily on finding binaries with the SUID bit set (`find / -perm -u=s`). However, Linux kernel capabilities divide root privileges into granular sub-permissions (such as `CAP_SETUID`, `CAP_NET_RAW`, and `CAP_DAC_OVERRIDE`).",
        "During CTF investigations such as Medusa 2.0, identifying binaries configured with excessive capabilities like `cap_setuid+ep` reveals direct privilege escalation vectors where an unprivileged local user can invoke `os.setuid(0)`.",
        "Hardening systems requires stripping unneeded capabilities from interpreters and adhering strictly to the principle of least privilege.",
      ],
      takeaway:
        "Extended POSIX capabilities are a critical audit vector; proper capability hygiene is essential for hardening Linux hosts.",
    },
  ];

  return (
    <section id="notes" className="container section" aria-label="Technical Lab Notes">
      <SectionLabel code="SYS.06 / LAB NOTES">
        TECHNICAL WRITING & ENGINEERING REASONING
      </SectionLabel>

      <div className="lab-notes-grid">
        {notes.map((note) => {
          const isExpanded = expandedId === note.id;

          return (
            <article key={note.id} className="lab-note-card">
              <div>
                <div className="lab-note-meta">
                  <span className="lab-note-tag">{note.tag}</span>
                  <span>{note.num} · {note.date}</span>
                </div>

                <h3 className="lab-note-title">{note.title}</h3>
                <p className="lab-note-summary">{note.summary}</p>

                <pre className="lab-note-code-preview">
                  <code>{note.codeSnippet}</code>
                </pre>

                {isExpanded && (
                  <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--line)", fontSize: "13px", color: "#b7b9b4", lineHeight: "1.6" }}>
                    {note.fullBody.map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ margin: "0 0 12px" }}>{paragraph}</p>
                    ))}
                    <div style={{ background: "rgba(117, 245, 208, 0.06)", border: "1px solid var(--accent)", padding: "10px 14px", marginTop: "14px", color: "var(--text)", fontSize: "12px" }}>
                      <strong style={{ color: "var(--accent)" }}>KEY TAKEAWAY: </strong>
                      {note.takeaway}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="lab-note-expand-btn"
                onClick={() => setExpandedId(isExpanded ? null : note.id)}
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "COLLAPSE NOTE ↑" : "READ COMPLETE ENGINEERING ANALYSIS ↓"}</span>
                <span>{isExpanded ? "−" : "+"}</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
