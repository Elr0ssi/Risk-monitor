export type RiskLevel = "Low" | "Moderate" | "Elevated" | "High";

export interface CountryRisk {
  code: string;
  name: string;
  region: string;
  riskScore: number;
  gdpTrillion: number;
  gdpPerCapita: number;
  debtToGdp: number;
  inflation: number;
  interestRate: number;
  politicalStability: number;
  tradeBalanceBn: number;
  resources: string[];
  coordinates: [number, number];
}

export interface RiskEvent {
  id: string;
  date: string;
  countryCode: string;
  category: "Economic" | "Political" | "Environmental" | "Military";
  severity: "Low" | "Medium" | "High";
  title: string;
  summary: string;
}

export interface FundExposure {
  fund: string;
  aumTrillion: number;
  topExposureCountries: string[];
}
