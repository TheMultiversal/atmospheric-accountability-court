import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "1rem", borderTop: "1px solid #ddd", marginTop: "2rem" }}>
      <small>© {new Date().getFullYear()} Atmospheric Accountability Court</small>
      <p>
        Legal guidance: keep content factual, evidence-based, and verified. Do not publish
        unverified allegations without legal review.
      </p>
    </footer>
  );
}