"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { countries, globalMacro, riskScoreHistory } from "@/data/mockData";
import { CurrencyChart, DebtDistributionChart, RiskEvolutionChart } from "@/components/charts";
import { Filters } from "@/components/filters";
import { FundNetwork } from "@/components/fund-network";
import { MetricCard } from "@/components/metric-card";
import { ResourceTable } from "@/components/resource-table";
import { RiskFeed } from "@/components/risk-feed";
import { useFilters } from "@/lib/store";

export default function HomePage() {
  const { region, query } = useFilters();

  const visibleCountries = countries.filter((country) => {
    const regionMatch = region === "All" || country.region === region;
    const queryMatch = country.name.toLowerCase().includes(query.toLowerCase());
    return regionMatch && queryMatch;
  });

  const topRisks = [...visibleCountries].sort((a, b) => b.riskScore - a.riskScore).slice(0, 5);

  return (
    <div className="space-y-5">
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-4">
        <MetricCard title="World Debt" value={`$${globalMacro.worldDebtTrillion}T`} change="+2.3% YoY" />
        <MetricCard title="Global GDP" value={`$${globalMacro.worldGdpTrillion}T`} change="+1.8% YoY" />
        <MetricCard title="Average Risk Score" value={`${Math.round(countries.reduce((acc, country) => acc + country.riskScore, 0) / countries.length)}`} change="Elevated" />
        <MetricCard title="High-Risk Countries" value={`${countries.filter((country) => country.riskScore >= 70).length}`} change="Watchlist" />
      </motion.section>

      <Filters />

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="grid gap-4 md:grid-cols-2">
          <DebtDistributionChart data={globalMacro.debtDistribution} />
          <CurrencyChart data={globalMacro.currencyDominance} />
          <div className="md:col-span-2">
            <RiskEvolutionChart data={riskScoreHistory} />
          </div>
          <div className="md:col-span-2">
            <ResourceTable />
          </div>
        </div>
        <div className="space-y-4">
          <RiskFeed />
          <FundNetwork />
        </div>
      </section>

      <section className="glass p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium">AI Insights (Rule-based)</p>
          <Link href="/map" className="text-sm text-neon.blue hover:underline">
            Open global map
          </Link>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-sm text-slate-300">
          {topRisks.map((country) => (
            <li key={country.code}>
              <span className="font-medium text-white">{country.name}</span> risk is {country.riskScore}/100 driven by inflation {country.inflation}% and political stability index {country.politicalStability}.
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
