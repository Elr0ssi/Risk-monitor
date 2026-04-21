import dynamic from "next/dynamic";
import { countries } from "@/data/mockData";

const DynamicMap = dynamic(() => import("@/components/world-map").then((mod) => mod.WorldMap), {
  ssr: false
});

export default function MapPage() {
  return (
    <div className="space-y-4">
      <section className="glass p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-neon.green">Global map</p>
        <h1 className="text-2xl font-semibold">Interactive Country Risk Surface</h1>
        <p className="mt-2 text-sm text-slate-300">Click any marker to inspect risk profile and navigate to country-level analytics.</p>
      </section>
      <DynamicMap countries={countries} />
    </div>
  );
}
