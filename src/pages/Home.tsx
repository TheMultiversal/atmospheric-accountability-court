import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Atmospheric Accountability Court</h1>
      <p>
        Educational platform and public repository for sources, patents, and
        technical details around atmospheric modification topics. Do not publish
        unverified accusations. See the legal & evidence guidelines.
      </p>

      <nav>
        <ul>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/companies">Companies & Individuals</Link>
          </li>
          <li>
            <Link to="/patents">Patents</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}