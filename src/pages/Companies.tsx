import React from "react";
import companies from "../data/companies.json";
import { Link } from "react-router-dom";

export default function Companies() {
  return (
    <div>
      <h2>Companies & Individuals</h2>
      <ul>
        {companies.map((c) => (
          <li key={c.id}>
            <Link to={`/companies/${c.id}`}>{c.name}</Link>
            <p>{c.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}