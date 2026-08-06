"use client";

export default function ContourBackground() {
  return (
    <div className="contour-bg-container" aria-hidden="true">
      <svg
        className="contour-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Minimal, 4 elegant architectural contour lines */}
        <g stroke="rgba(160, 114, 42, 0.22)" strokeWidth="1.8" fill="none">
          <path d="M-100,280 C300,120 600,420 950,220 C1300,20 1500,320 1700,200" />
          <path d="M-100,480 C250,300 650,600 1000,380 C1350,160 1550,500 1700,360" />
          <path d="M-100,680 C200,500 700,780 1050,560 C1400,340 1600,680 1700,540" />
          <path d="M-100,850 C180,660 750,940 1100,740 C1450,540 1650,850 1700,720" />
        </g>
      </svg>
    </div>
  );
}
