"use client";

import { useState } from "react";

type HardwareSubsystem = {
  id: string;
  name: string;
  category: "COMPUTE" | "COMMUNICATION" | "DRIVERS" | "MECHANICS" | "PHYSICS";
  specs: string;
  role: string;
  technicalImplementation: string;
  systemIntegration: string;
};

export function KineticHardwareViz() {
  const [selectedSystemId, setSelectedSystemId] = useState<string>("arduino");

  const subsystems: HardwareSubsystem[] = [
    {
      id: "arduino",
      name: "Arduino Uno & CNC Shield V3 (GRBL)",
      category: "COMPUTE",
      specs: "ATmega328P · CNC Shield V3 Expansion Board · Limit Switch Interfaces",
      role: "Executes GRBL motion control firmware to translate incoming G-code commands into synchronized step and direction pulses for dual stepper motors.",
      technicalImplementation:
        "Configured GRBL firmware with acceleration profiles and homing cycle limits to ensure accurate coordinate mapping across the table.",
      systemIntegration: "Directly drives the A4988 motor driver modules via CNC Shield V3.",
    },
    {
      id: "esp32",
      name: "ESP32 & TFT Touch Interface",
      category: "COMMUNICATION",
      specs: "ESP32 Wi-Fi / BLE · TFT Touch Display · UART Serial Bridge",
      role: "Manages the web-based control application via WebSockets and local TFT touch screen, transmitting parsed G-code streams to the Arduino Uno.",
      technicalImplementation:
        "Implemented bi-directional communication between ESP32 and Arduino Uno to allow users to select patterns, input custom text, and monitor motion status.",
      systemIntegration: "Connects web browser clients and TFT touch UI to the GRBL motion controller.",
    },
    {
      id: "a4988",
      name: "A4988 Stepper Motor Drivers",
      category: "DRIVERS",
      specs: "A4988 Microstepping Bipolar Motor Drivers · Current Limiting Potentiometers",
      role: "Controls current delivery to Motor A and Motor B with microstepping for smooth mechanical movement.",
      technicalImplementation:
        "Calibrated VREF reference voltages on driver pots to set appropriate motor current, preventing overheating while maintaining holding torque.",
      systemIntegration: "Mounted directly into CNC Shield V3 sockets above the Arduino Uno.",
    },
    {
      id: "corexy",
      name: "CoreXY Mechanical Gantry (Dual NEMA 17)",
      category: "MECHANICS",
      specs: "2x NEMA 17 Stepper Motors · GT2 Timing Belts & Pulleys · Limit Switches",
      role: "Translates rotational motor steps into 2D planar motion using CoreXY kinematics where both motors remain stationary.",
      technicalImplementation:
        "Assembled gantry frame with GT2 belts, idlers, and mechanical limit switches for reliable homing and zeroing.",
      systemIntegration: "Mechanically positions the magnetic carriage beneath the table surface.",
    },
    {
      id: "magnetic",
      name: "Magnetic Carriage & Sand Bed",
      category: "PHYSICS",
      specs: "Neodymium Magnet Carriage · Steel Sphere · Flat Sand Bed",
      role: "Sub-surface magnet pulls the steel sphere through fine sand, drawing geometric artwork, patterns, and custom text.",
      technicalImplementation:
        "Aligned vertical magnetic coupling distance through the non-magnetic bed to ensure continuous ball retention without jamming.",
      systemIntegration: "Forms the interactive visual display layer of the smart coffee table.",
    },
  ];

  const activeSubsystem = subsystems.find((s) => s.id === selectedSystemId) || subsystems[0];

  return (
    <div className="interactive-viz-box" aria-label="Interactive SandPlotter Hardware System Diagram">
      <div className="viz-toolbar">
        <div>
          <span style={{ color: "var(--accent)", fontWeight: "bold" }}>SYS.HARDWARE // </span>
          <span>SANDPLOTTER SMART COFFEE TABLE EMBEDDED ARCHITECTURE</span>
        </div>
        <div style={{ color: "var(--muted)", fontSize: "9px" }}>
          FIRST YEAR HARDWARE PROJECT · ARDUINO + ESP32 + COREXY
        </div>
      </div>

      <div className="viz-stage-canvas" style={{ padding: "24px" }}>
        {/* CoreXY Motion Math Box */}
        <div style={{ background: "rgba(0, 0, 0, 0.5)", border: "1px solid var(--line)", padding: "14px 18px", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ color: "var(--accent)", fontSize: "10px" }}>
              COREXY KINEMATICS MATRIX (DUAL-MOTOR COORDINATION):
            </span>
            <span style={{ color: "var(--dim)", fontSize: "9px" }}>GRBL FIRMWARE TRANSFORMATION</span>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "11px", color: "var(--text)" }}>
            <code>ΔA = ΔX + ΔY (Motor A steps)</code>
            <span style={{ color: "var(--dim)" }}>|</span>
            <code>ΔB = ΔX - ΔY (Motor B steps)</code>
            <span style={{ color: "var(--dim)" }}>|</span>
            <span style={{ color: "var(--muted)" }}>Pure X-motion = Both motors rotate same direction</span>
            <span style={{ color: "var(--dim)" }}>|</span>
            <span style={{ color: "var(--muted)" }}>Pure Y-motion = Motors rotate opposite direction</span>
          </div>
        </div>

        {/* Hardware Block Flow */}
        <div className="arch-nodes-flow">
          {subsystems.map((sub) => (
            <div
              key={sub.id}
              className={`arch-node ${selectedSystemId === sub.id ? "selected" : ""}`}
              onClick={() => setSelectedSystemId(sub.id)}
            >
              <div className="arch-node-type">{sub.category}</div>
              <div className="arch-node-title" style={{ fontSize: "10px" }}>{sub.name.split(" ")[0]} {sub.name.split(" ")[1]}</div>
              <div style={{ fontSize: "8px", color: "var(--accent)" }}>{sub.specs.split("·")[0]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="viz-inspector">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid var(--line)", paddingBottom: "8px" }}>
          <div>
            <strong style={{ color: "var(--text)", fontSize: "13px" }}>{activeSubsystem.name}</strong>
            <span style={{ color: "var(--accent)", marginLeft: "10px", fontSize: "10px" }}>[{activeSubsystem.category}]</span>
          </div>
          <span style={{ color: "var(--muted)", fontSize: "10px" }}>{activeSubsystem.systemIntegration}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", fontSize: "12px", color: "#b7b9b4", lineHeight: "1.55" }}>
          <div>
            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
              HARDWARE SPECIFICATIONS & COMPONENTS
            </span>
            <code style={{ display: "block", color: "var(--text)", background: "var(--code-bg)", padding: "6px 8px", border: "1px solid var(--line)", marginBottom: "12px", fontSize: "11px" }}>
              {activeSubsystem.specs}
            </code>

            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
              FUNCTION & ROLE
            </span>
            <p style={{ margin: 0 }}>{activeSubsystem.role}</p>
          </div>

          <div>
            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
              TECHNICAL WORK & FIRMWARE
            </span>
            <p style={{ margin: "0 0 12px" }}>{activeSubsystem.technicalImplementation}</p>

            <span style={{ display: "block", color: "var(--accent)", fontSize: "9px", marginBottom: "3px" }}>
              SYSTEM INTEGRATION
            </span>
            <p style={{ margin: 0, color: "#d8dbd5" }}>{activeSubsystem.systemIntegration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
