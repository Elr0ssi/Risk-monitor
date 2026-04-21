"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const COLORS = ["#78c8a3", "#4da3ff", "#f6a347", "#ef4444", "#8b5cf6"];

export function DebtDistributionChart({ data }: { data: { region: string; value: number }[] }) {
  return (
    <div className="glass p-4">
      <p className="mb-4 text-sm font-medium">Debt Distribution by Region</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="region" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Bar dataKey="value" fill="#4da3ff" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CurrencyChart({ data }: { data: { currency: string; share: number }[] }) {
  return (
    <div className="glass p-4">
      <p className="mb-4 text-sm font-medium">Reserve Currency Dominance</p>
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="share" nameKey="currency" cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={entry.currency} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function RiskEvolutionChart({ data }: { data: { month: string; highRisk: number; moderateRisk: number }[] }) {
  return (
    <div className="glass p-4">
      <p className="mb-4 text-sm font-medium">Risk Score Evolution</p>
      <div className="h-64">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="highRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="moderateRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f6a347" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f6a347" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Area type="monotone" dataKey="highRisk" stroke="#ef4444" fill="url(#highRisk)" />
            <Area type="monotone" dataKey="moderateRisk" stroke="#f6a347" fill="url(#moderateRisk)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
