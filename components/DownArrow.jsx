"use client";

import "./DownArrow.css";

export default function DownArrow({ color = "white", space = "0" }) {
  return (
    <div className="down-arrow" style={{ marginTop: space }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
      >
        <path
          d="M12 5V19M12 19L19 12M12 19L5 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
