import { ImageResponse } from "next/og";

export const alt = "Thejitha Wijayanayake — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070809",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#e2e8f0",
          border: "2px solid rgba(94, 234, 212, 0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                background: "rgba(94, 234, 212, 0.12)",
                border: "1px solid rgba(94, 234, 212, 0.4)",
                color: "#5eead4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              T
            </div>
            <span
              style={{
                color: "#5eead4",
                fontSize: "18px",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              THEJITHA // PORTFOLIO
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(94, 234, 212, 0.1)",
              border: "1px solid rgba(94, 234, 212, 0.3)",
              padding: "8px 18px",
              borderRadius: "9999px",
              color: "#5eead4",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <span>● UNIVERSITY OF MORATUWA</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Thejitha Wijayanayake
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Software Engineer &amp; Information Technology Undergraduate
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Next.js", "FastAPI", "AI / ML", "Cybersecurity", "MSSQL"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    color: "#cbd5e1",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <span
            style={{
              color: "#5eead4",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            thejitha-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
