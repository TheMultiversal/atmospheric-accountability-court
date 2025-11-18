import React from "react";
import { useParams, Link } from "react-router-dom";
import companiesData from "../data/companies.json";
import type { Company } from "../types";

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const company = companiesData.find((c) => c.id === id) as Company | undefined;

  if (!company)
    return (
      <div>
        <h2>Company not found</h2>
        <Link to="/companies">Back to list</Link>
      </div>
    );

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.summary}</p>
      <small>Jurisdiction: {company.jurisdiction}</small>
      <section>
        <h3>Allegations & Evidence (Public Sources)</h3>
        <p>Note: Only publish verified claims with source links and legal review.</p>
        <ul>
          {(company.allegations || []).map((a) => (
            <li key={a.id}>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
              <p>
                Status: <strong>{a.status}</strong>
              </p>
              <p>Evidence & sources:</p>
              <ul>
                {a.evidenceUrls.map((u) => (
                  <li key={u}>
                    <a href={u}>{u}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <Link to="/companies">Back</Link>
    </div>
  );
}