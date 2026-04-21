"use client";

import Link from "next/link";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CountryRisk } from "@/lib/types";

function getRiskColor(score: number) {
  if (score < 35) return "#78c8a3";
  if (score < 55) return "#4da3ff";
  if (score < 70) return "#f6a347";
  return "#ef4444";
}

export function WorldMap({ countries }: { countries: CountryRisk[] }) {
  return (
    <div className="glass h-[520px] overflow-hidden p-2">
      <MapContainer center={[22, 8]} zoom={2} scrollWheelZoom className="h-full w-full rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries.map((country) => (
          <CircleMarker
            key={country.code}
            center={country.coordinates}
            radius={10}
            pathOptions={{ color: getRiskColor(country.riskScore), fillOpacity: 0.8 }}
          >
            <Popup>
              <div className="text-black">
                <p className="font-semibold">{country.name}</p>
                <p>Risk Score: {country.riskScore}</p>
                <Link className="text-blue-600 underline" href={`/country/${country.code}`}>
                  Open dashboard
                </Link>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
