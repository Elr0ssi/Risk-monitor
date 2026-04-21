"use client";

import { useFilters } from "@/lib/store";

export function Filters() {
  const { region, riskCategory, query, setRegion, setRiskCategory, setQuery } = useFilters();

  return (
    <div className="glass grid gap-3 p-4 md:grid-cols-4">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search country"
        className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm"
      />
      <select value={region} onChange={(event) => setRegion(event.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm">
        {["All", "North America", "South America", "Europe", "Asia", "Middle East", "Africa"].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select value={riskCategory} onChange={(event) => setRiskCategory(event.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm">
        {["All", "Economic", "Political", "Environmental", "Military"].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm">
        {["Current", "Last 3 months", "Last 12 months"].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
