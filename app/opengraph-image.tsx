import { ImageResponse } from "next/og";

export const alt = "ScalexMedia — We make brands impossible to scroll past.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#F5F5F0",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#C8F531" }}>
          SC A L E X M E D I A
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            lineHeight: 0.9,
            letterSpacing: -3,
            fontWeight: 500,
          }}
        >
          <div>WE MAKE BRANDS</div>
          <div>IMPOSSIBLE TO</div>
          <div>SCROLL PAST.</div>
        </div>
        <div style={{ fontSize: 24, color: "#8A8A82" }}>
          Strategy · Content · Performance · Growth
        </div>
      </div>
    ),
    size,
  );
}
