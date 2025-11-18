import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#0a0a0a", color: "white" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <strong>Atmospheric Accountability Court</strong>
      </Link>
    </header>
  );
}