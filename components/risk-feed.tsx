import { countries, riskEvents } from "@/data/mockData";

const severityColor = {
  Low: "text-neon.green",
  Medium: "text-neon.orange",
  High: "text-red-400"
};

export function RiskFeed() {
  return (
    <div className="glass p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium">Global Risk Monitor</p>
        <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">Live feed</span>
      </div>
      <div className="space-y-3">
        {riskEvents.map((event) => {
          const country = countries.find((item) => item.code === event.countryCode);
          return (
            <article key={event.id} className="rounded-lg border border-white/10 bg-black/30 p-3">
              <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                <span>{event.date}</span>
                <span>{event.category}</span>
              </div>
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-slate-300">{event.summary}</p>
              <p className="mt-2 text-xs text-slate-400">
                {country?.name} · <span className={severityColor[event.severity]}>{event.severity} severity</span>
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
