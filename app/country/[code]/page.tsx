import { notFound } from "next/navigation";
import { countries } from "@/data/mockData";

export default function CountryPage({ params }: { params: { code: string } }) {
  const country = countries.find((item) => item.code === params.code.toUpperCase());

  if (!country) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <section className="glass p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-neon.green">Country dashboard</p>
        <h1 className="text-3xl font-semibold">{country.name}</h1>
        <p className="mt-2 text-sm text-slate-300">Region: {country.region} · Risk Score: {country.riskScore}/100</p>
      </section>
      <section className="grid gap-3 md:grid-cols-3">
        {[
          ["GDP", `$${country.gdpTrillion}T`],
          ["GDP Per Capita", `$${country.gdpPerCapita.toLocaleString()}`],
          ["Debt / GDP", `${country.debtToGdp}%`],
          ["Inflation", `${country.inflation}%`],
          ["Interest Rate", `${country.interestRate}%`],
          ["Political Stability", `${country.politicalStability}`],
          ["Trade Balance", `$${country.tradeBalanceBn}B`],
          ["Resources", country.resources.join(", ")],
          ["Composite Risk", `${country.riskScore}/100`]
        ].map(([label, value]) => (
          <div className="glass p-4" key={label}>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{label}</p>
            <p className="mt-2 text-xl font-semibold">{value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
