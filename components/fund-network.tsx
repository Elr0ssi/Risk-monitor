import { fundExposures } from "@/data/mockData";

export function FundNetwork() {
  return (
    <div className="glass p-4">
      <p className="mb-4 text-sm font-medium">Financial Power Structure</p>
      <div className="space-y-3">
        {fundExposures.map((fund) => (
          <div key={fund.fund} className="rounded-lg border border-white/10 bg-black/30 p-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">{fund.fund}</p>
              <p className="text-sm text-neon.blue">${fund.aumTrillion.toFixed(1)}T AUM</p>
            </div>
            <p className="mt-2 text-xs text-slate-300">Exposure: {fund.topExposureCountries.join(" · ")}</p>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-neon.green to-neon.blue" style={{ width: `${Math.min(fund.aumTrillion * 8, 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
