import { globalMacro } from "@/data/mockData";

export function ResourceTable() {
  return (
    <div className="glass overflow-hidden p-4">
      <p className="mb-4 text-sm font-medium">Global Resource Distribution Heatmap</p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="px-2 py-2 text-left">Resource</th>
              <th className="px-2 py-2">Americas</th>
              <th className="px-2 py-2">Europe</th>
              <th className="px-2 py-2">Asia</th>
              <th className="px-2 py-2">Middle East</th>
              <th className="px-2 py-2">Africa</th>
            </tr>
          </thead>
          <tbody>
            {globalMacro.resourceDistribution.map((row) => (
              <tr key={row.resource} className="border-t border-white/10">
                <td className="px-2 py-2">{row.resource}</td>
                <td className="px-2 py-2 text-center">{row.americas}%</td>
                <td className="px-2 py-2 text-center">{row.europe}%</td>
                <td className="px-2 py-2 text-center">{row.asia}%</td>
                <td className="px-2 py-2 text-center">{row.middleEast}%</td>
                <td className="px-2 py-2 text-center">{row.africa}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
