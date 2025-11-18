export interface Allegation {
  id: string;
  title: string;
  description: string;
  evidenceUrls: string[];
  dateReported?: string;
  status?: "unverified" | "verified" | "disputed";
}

export interface Company {
  id: string;
  name: string;
  summary?: string;
  jurisdiction?: string;
  evidenceSummary?: string;
  allegations?: Allegation[];
  sources?: string[]; // URLs or citations
}