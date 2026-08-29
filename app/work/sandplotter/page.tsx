import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";
import { KineticHardwareViz } from "@/components/KineticHardwareViz";

export const metadata: Metadata = {
  title: "SandPlotter Case Study",
  description:
    "First Year Hardware Project: Interactive SandPlotter Smart Coffee Table combining CoreXY kinematics, Arduino Uno (GRBL), ESP32 WebSockets, TFT touch display, and CNC Shield V3.",
};

export default function SandPlotterCaseStudy() {
  return (
    <CaseStudyShell>
      <main>
        {/* Top Header */}
        <header className="container cs-header">
          <div className="cs-breadcrumbs">
            <Link href="/">THEJITHA</Link>
            <span>/</span>
            <Link href="/#work">SELECTED WORK</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>SANDPLOTTER</span>
          </div>

          <h1 className="cs-title">SandPlotter Smart Coffee Table</h1>
          <p className="cs-lead">
            Developed an interactive sand art coffee table capable of generating intricate sand patterns and custom text through a CoreXY motion system.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>PROJECT TYPE</span>
              <strong>First Year Hardware Project</strong>
            </div>
            <div>
              <span>TECHNICAL CONTRIBUTION</span>
              <strong>Motion Mechanism, GRBL Setup, ESP32 Communication & UI</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>Arduino Uno, ESP32, GRBL, CoreXY, TFT Display, WebSocket, CNC Shield V3</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>August 2024 – August 2025</strong>
            </div>
          </div>
        </header>

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>PHYSICAL & DIGITAL FUSION</span>
          </div>
          <div className="cs-text-body">
            <p>
              The SandPlotter Smart Coffee Table was built as a first-year hardware engineering project at the University of Moratuwa. The goal was to build a functional piece of kinetic furniture that autonomously draws intricate geometric curves, algorithmic patterns, and custom user-input text into a fine layer of sand.
            </p>
            <p>
              Beneath a glass tabletop, a magnetic carriage moves invisibly along an X-Y plane, pulling a steel ball bearing through the sand bed to create continuous kinetic artwork.
            </p>
          </div>
        </section>

        {/* 2. Problem / Context */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 / PROBLEM & MECHANICAL CONSTRAINTS</span>
            <span>COREXY MOTION PRINCIPLES</span>
          </div>
          <div className="cs-text-body">
            <p>
              Traditional Cartesian gantry systems place the X-axis motor on top of the moving Y-axis carriage. In a living room furniture project, moving heavy stepper motors results in increased moving inertia, higher belt wear, and audible vibrations.
            </p>
            <p>
              To address this, we implemented a <strong>CoreXY motion system</strong> where both NEMA 17 stepper motors remain fixed to the stationary outer frame. By utilizing a continuous GT2 timing belt routing configuration, simultaneous rotation of both motors creates precise, responsive 2D motion across the entire sand canvas.
            </p>
          </div>
        </section>

        {/* 3. My Role & Technical Contribution */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>03 / TECHNICAL CONTRIBUTION & RESPONSIBILITIES</span>
            <span>MECHANICAL ASSEMBLY & FIRMWARE</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Motion Mechanism Assembly</h4>
              <p>
                Designed and assembled the physical motion mechanism using NEMA 17 stepper motors, GT2 timing belts, idler pulleys, A4988 motor driver modules, and mechanical limit switches for homing calibration.
              </p>
            </div>
            <div className="cs-card">
              <h4>GRBL Firmware Configuration</h4>
              <p>
                Flashed and configured open-source GRBL firmware on an Arduino Uno with CNC Shield V3, tuning steps-per-millimeter coordinate transformations, acceleration profiles, and axis limits.
              </p>
            </div>
            <div className="cs-card">
              <h4>ESP32 to Arduino Communication</h4>
              <p>
                Implemented serial communication between the ESP32 microcontroller and Arduino Uno to reliably transmit buffered G-code commands.
              </p>
            </div>
            <div className="cs-card">
              <h4>TFT Touch Display & Web Application</h4>
              <p>
                Built the user interfaces allowing users to trigger pattern draws both locally via an on-table TFT touch display and remotely via a web application over WebSockets.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK & HARDWARE</span>
            <span>EMBEDDED SYSTEM ARCHITECTURE</span>
          </div>
          <table className="decision-table">
            <thead>
              <tr>
                <th>SUBSYSTEM</th>
                <th>HARDWARE / TOOL</th>
                <th>TECHNICAL PURPOSE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Motion Controller</strong></td>
                <td>Arduino Uno + CNC Shield V3</td>
                <td>Executes GRBL firmware to generate real-time step and direction pulses for stepper motors.</td>
              </tr>
              <tr>
                <td><strong>Motor Drivers</strong></td>
                <td>A4988 Stepper Drivers</td>
                <td>Provides microstepping control and current regulation for the dual NEMA 17 motors.</td>
              </tr>
              <tr>
                <td><strong>Kinematic Mechanism</strong></td>
                <td>CoreXY Gantry + GT2 Belts</td>
                <td>Keeps both motors stationary, reducing gantry moving mass and ensuring smooth 2D vector movement.</td>
              </tr>
              <tr>
                <td><strong>Wireless & Interface</strong></td>
                <td>ESP32 + TFT Touch Display</td>
                <td>Hosts the WebSocket server for the web control app and drives the on-device touchscreen.</td>
              </tr>
              <tr>
                <td><strong>Firmware & Protocol</strong></td>
                <td>GRBL & G-code</td>
                <td>Translates geometric vector coordinates into physical motor steps with limit switch homing.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 5. What I Built: Hardware Architecture Visualizer */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>05 / WHAT I BUILT: EMBEDDED SYSTEM DIAGRAM</span>
            <span>INTERACTIVE HARDWARE TOPOLOGY</span>
          </div>
          <div className="cs-text-body">
            <p>
              Click each subsystem node below to inspect hardware roles, firmware configurations, and electrical connections:
            </p>
          </div>

          <KineticHardwareViz />
        </section>

        {/* 6. Challenges & 7. What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>06 & 07 / CHALLENGES & KEY TAKEAWAYS</span>
            <span>HARDWARE-SOFTWARE INTEGRATION</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Engineering Challenges</h4>
              <p>
                Balancing belt tension across both CoreXY loops was critical to prevent skewing and ensure perpendicular axes. Tuning driver current limits on the A4988 modules prevented motor overheating during prolonged drawings while ensuring sufficient torque to guide the magnetic carriage through the sand bed.
              </p>
            </div>
            <div className="cs-card">
              <h4>What I Learned</h4>
              <p>
                This first-year project provided foundational hands-on experience combining mechanical construction, electrical driver interfacing, firmware flashing, and micro-controller communication (ESP32 to Arduino) with modern web control over WebSockets.
              </p>
            </div>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "TeaBlendAI Auction Platform",
              route: "/work/teablend-ai",
            }}
            next={{
              title: "ICITR 2026 Conference Website",
              route: "/work/icitr-2026",
            }}
            returnRoute="/#work"
            returnLabel="SELECTED WORK"
          />
        </div>
      </main>
    </CaseStudyShell>
  );
}
