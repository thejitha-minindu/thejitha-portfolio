"use client";

import { useState } from "react";

type InvestigationTab = {
  id: string;
  tabLabel: string;
  command: string;
  output: string[];
  vulnerabilityType: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "INFO";
  mitigation: string;
  defensePrinciple: string;
};

export function SecurityTerminalViz() {
  const [activeTabId, setActiveTabId] = useState<string>("recon");

  const tabs: InvestigationTab[] = [
    {
      id: "recon",
      tabLabel: "01: NMAP RECON",
      command: "nmap -sC -sV -p- 10.10.11.42 -oN ctf_scan.txt",
      output: [
        "Starting Nmap ( https://nmap.org )",
        "Nmap scan report for ctf-target.local (10.10.11.42)",
        "Host is up (0.024s latency).",
        "PORT     STATE SERVICE VERSION",
        "22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu (protocol 2.0)",
        "80/tcp   open  http    nginx 1.18.0 (Ubuntu)",
        "8080/tcp open  http    Node.js (API Service)",
        "",
        "Nmap done: 1 IP address (1 host up) scanned",
      ],
      vulnerabilityType: "Exposed API Service on Non-Standard Port 8080",
      severity: "MEDIUM",
      mitigation:
        "Restrict internal API access through reverse proxy routing and enforce strict firewall egress/ingress policies.",
      defensePrinciple: "Principle of Least Privilege & Perimeter Defense",
    },
    {
      id: "web",
      tabLabel: "02: WEB VULN TRIAGE",
      command: "curl -s -X POST http://10.10.11.42:8080/api/v1/query -H 'Content-Type: application/json' -d '{\"filter\": \"admin' OR '1'='1\"}'",
      output: [
        "HTTP/1.1 200 OK",
        "Content-Type: application/json",
        "",
        "{",
        '  "status": "success",',
        '  "records_returned": 3,',
        '  "data": [',
        '    { "id": 1, "username": "admin", "role": "superuser" },',
        '    { "id": 2, "username": "operator", "role": "analyst" }',
        "  ]",
        "}",
      ],
      vulnerabilityType: "Unsanitized Input in API Query Endpoint",
      severity: "CRITICAL",
      mitigation:
        "Replace raw string concatenation with parameterized prepared queries or ORM validation to prevent injection attacks.",
      defensePrinciple: "Input Validation, Parameterization & Zero Information Leakage",
    },
    {
      id: "privesc",
      tabLabel: "03: PRIVESC AUDIT",
      command: "getcap -r / 2>/dev/null",
      output: [
        "[+] EXTENDED LINUX CAPABILITIES DETECTED:",
        "/usr/bin/python3.10 = cap_setuid+ep",
        "",
        "[!] ANALYSIS:",
        "Binary /usr/bin/python3.10 possesses cap_setuid+ep capability.",
        "Allows local process to set effective UID to 0 without password prompt.",
        "Payload: python3.10 -c 'import os; os.setuid(0); os.system(\"/bin/bash\")'",
        "[+] ROOT SHELL GRANTED: uid=0(root) gid=0(root)",
      ],
      vulnerabilityType: "Over-Permissive Linux Capabilities (CAP_SETUID on Interpreter)",
      severity: "CRITICAL",
      mitigation:
        "Strip excessive POSIX capabilities from system interpreters using 'setcap -r /usr/bin/python3.10' and use dedicated service accounts.",
      defensePrinciple: "Least Privilege & Linux Capability Hygiene",
    },
    {
      id: "defense",
      tabLabel: "04: DEFENSE & HARDENING",
      command: "systemctl status ufw && apparmor_status",
      output: [
        "[+] DEFENSIVE SYSTEM STATUS",
        "----------------------------------------------------------------",
        "[OK] UFW Firewall active: Default Deny Incoming, Allow SSH/HTTP",
        "[OK] SSH config: PermitRootLogin no & PasswordAuthentication no",
        "[OK] Interpreters stripped of unneeded POSIX capabilities",
        "[OK] Parameterized queries enforced across backend API endpoints",
        "----------------------------------------------------------------",
        "STATUS: DEFENSIVE REMEDIATION VERIFIED",
      ],
      vulnerabilityType: "Defensive System Hardening & Configuration Review",
      severity: "INFO",
      mitigation:
        "Maintain regular security audits, adhere to least privilege permissions, and isolate services with AppArmor profiles.",
      defensePrinciple: "Defense in Depth & Continuous Security Posture",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className="interactive-viz-box" aria-label="Interactive CTF Terminal & Investigation Console">
      <div className="viz-toolbar">
        <div>
          <span style={{ color: "var(--accent)", fontWeight: "bold" }}>SYS.CTF // </span>
          <span>ETHICAL INVESTIGATION CONSOLE & CTF CHALLENGE WALKTHROUGHS</span>
        </div>
        <div className="viz-controls">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`viz-btn ${activeTabId === tab.id ? "active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-bar">
          <div className="terminal-dots">
            <span className="terminal-dot" style={{ background: "#f43f5e" }} />
            <span className="terminal-dot" style={{ background: "#f59e0b" }} />
            <span className="terminal-dot" style={{ background: "#10b981" }} />
          </div>
          <span style={{ color: "var(--dim)" }}>thejitha@ctf-lab:~/{activeTabId}</span>
          <span style={{ color: "var(--accent)", fontSize: "10px" }}>MEDUSA 2.0 CTF · 2ND RUNNERS-UP</span>
        </div>

        <div className="terminal-body">
          <div style={{ marginBottom: "12px" }}>
            <span className="term-prompt">thejitha@ctf-lab:~$ </span>
            <span style={{ color: "var(--text)" }}>{currentTab.command}</span>
          </div>

          {currentTab.output.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.startsWith("[+]") || line.includes("[OK]")
                  ? "var(--accent)"
                  : line.startsWith("[!]") || line.startsWith("PORT")
                  ? "var(--warn)"
                  : line.startsWith("CRITICAL") || line.includes("ROOT SHELL")
                  ? "var(--danger)"
                  : "#a6a9a3",
              }}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </div>
      </div>

      <div className="viz-inspector">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid var(--line)", paddingBottom: "6px" }}>
          <div>
            <span style={{ color: "var(--muted)", fontSize: "9px" }}>DETECTED VECTOR: </span>
            <strong style={{ color: "var(--text)", fontSize: "12px" }}>{currentTab.vulnerabilityType}</strong>
          </div>
          <span
            style={{
              padding: "2px 6px",
              fontSize: "9px",
              border: "1px solid var(--line)",
              color: currentTab.severity === "CRITICAL" ? "var(--danger)" : currentTab.severity === "MEDIUM" ? "var(--warn)" : "var(--accent)",
            }}
          >
            SEVERITY: {currentTab.severity}
          </span>
        </div>

        <div className="security-inspector-grid">
          <div>
            <span style={{ display: "block", color: "var(--accent)", fontSize: "9px", marginBottom: "3px" }}>
              REMEDIATION & MITIGATION
            </span>
            <p style={{ margin: 0 }}>{currentTab.mitigation}</p>
          </div>
          <div>
            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
              SECURITY PRINCIPLE
            </span>
            <p style={{ margin: 0, color: "var(--text)" }}>{currentTab.defensePrinciple}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
