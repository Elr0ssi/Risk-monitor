import { CountryRisk, FundExposure, RiskEvent } from "@/lib/types";

export const countries: CountryRisk[] = [
  {
    code: "USA",
    name: "United States",
    region: "North America",
    riskScore: 46,
    gdpTrillion: 28.9,
    gdpPerCapita: 86400,
    debtToGdp: 122,
    inflation: 3.1,
    interestRate: 5.0,
    politicalStability: 0.52,
    tradeBalanceBn: -773,
    resources: ["Oil", "Gas", "Rare Earths"],
    coordinates: [37.1, -95.7]
  },
  {
    code: "CHN",
    name: "China",
    region: "Asia",
    riskScore: 58,
    gdpTrillion: 18.1,
    gdpPerCapita: 12800,
    debtToGdp: 86,
    inflation: 1.2,
    interestRate: 3.45,
    politicalStability: -0.18,
    tradeBalanceBn: 594,
    resources: ["Rare Earths", "Coal", "Gas"],
    coordinates: [35.8, 104.2]
  },
  {
    code: "DEU",
    name: "Germany",
    region: "Europe",
    riskScore: 32,
    gdpTrillion: 4.7,
    gdpPerCapita: 55700,
    debtToGdp: 64,
    inflation: 2.4,
    interestRate: 4.25,
    politicalStability: 0.81,
    tradeBalanceBn: 247,
    resources: ["Gas", "Industrial Metals"],
    coordinates: [51.2, 10.4]
  },
  {
    code: "BRA",
    name: "Brazil",
    region: "South America",
    riskScore: 49,
    gdpTrillion: 2.2,
    gdpPerCapita: 10200,
    debtToGdp: 88,
    inflation: 4.5,
    interestRate: 10.5,
    politicalStability: -0.23,
    tradeBalanceBn: 62,
    resources: ["Oil", "Lithium", "Iron Ore"],
    coordinates: [-14.2, -51.9]
  },
  {
    code: "NGA",
    name: "Nigeria",
    region: "Africa",
    riskScore: 73,
    gdpTrillion: 0.47,
    gdpPerCapita: 2100,
    debtToGdp: 45,
    inflation: 28.9,
    interestRate: 24.75,
    politicalStability: -1.91,
    tradeBalanceBn: 12,
    resources: ["Oil", "Gas"],
    coordinates: [9.1, 8.7]
  },
  {
    code: "SAU",
    name: "Saudi Arabia",
    region: "Middle East",
    riskScore: 41,
    gdpTrillion: 1.1,
    gdpPerCapita: 32800,
    debtToGdp: 25,
    inflation: 1.8,
    interestRate: 6.0,
    politicalStability: -0.58,
    tradeBalanceBn: 95,
    resources: ["Oil", "Gas"],
    coordinates: [23.8, 45.1]
  }
];

export const riskEvents: RiskEvent[] = [
  {
    id: "evt-1",
    date: "2026-04-20",
    countryCode: "NGA",
    category: "Economic",
    severity: "High",
    title: "Currency stress in local bond market",
    summary: "Rapid FX depreciation is pressuring sovereign debt servicing costs."
  },
  {
    id: "evt-2",
    date: "2026-04-19",
    countryCode: "CHN",
    category: "Political",
    severity: "Medium",
    title: "New trade restrictions announced",
    summary: "Export licensing changes impact semiconductor and battery supply chains."
  },
  {
    id: "evt-3",
    date: "2026-04-18",
    countryCode: "BRA",
    category: "Environmental",
    severity: "Medium",
    title: "Severe drought affects hydro generation",
    summary: "Energy sector volatility expected due to lower reservoir levels."
  },
  {
    id: "evt-4",
    date: "2026-04-16",
    countryCode: "SAU",
    category: "Military",
    severity: "Low",
    title: "Regional naval drills increase security posture",
    summary: "Shipping insurers are evaluating premium changes for nearby routes."
  }
];

export const globalMacro = {
  worldDebtTrillion: 315,
  worldGdpTrillion: 112,
  debtDistribution: [
    { region: "Americas", value: 38 },
    { region: "Europe", value: 27 },
    { region: "Asia", value: 30 },
    { region: "Middle East", value: 3 },
    { region: "Africa", value: 2 }
  ],
  currencyDominance: [
    { currency: "USD", share: 58 },
    { currency: "EUR", share: 20 },
    { currency: "CNY", share: 7 },
    { currency: "JPY", share: 5 },
    { currency: "Other", share: 10 }
  ],
  resourceDistribution: [
    { resource: "Oil", americas: 24, europe: 5, asia: 15, middleEast: 41, africa: 15 },
    { resource: "Gas", americas: 18, europe: 7, asia: 19, middleEast: 38, africa: 18 },
    { resource: "Lithium", americas: 54, europe: 2, asia: 25, middleEast: 1, africa: 18 },
    { resource: "Rare Earths", americas: 12, europe: 5, asia: 70, middleEast: 2, africa: 11 }
  ]
};

export const fundExposures: FundExposure[] = [
  { fund: "BlackRock", aumTrillion: 10.5, topExposureCountries: ["USA", "CHN", "DEU"] },
  { fund: "Vanguard", aumTrillion: 8.7, topExposureCountries: ["USA", "JPN", "GBR"] },
  { fund: "State Street", aumTrillion: 4.3, topExposureCountries: ["USA", "DEU", "FRA"] },
  { fund: "Fidelity", aumTrillion: 4.9, topExposureCountries: ["USA", "CHN", "BRA"] }
];

export const riskScoreHistory = [
  { month: "Nov", highRisk: 12, moderateRisk: 31 },
  { month: "Dec", highRisk: 13, moderateRisk: 29 },
  { month: "Jan", highRisk: 15, moderateRisk: 28 },
  { month: "Feb", highRisk: 18, moderateRisk: 26 },
  { month: "Mar", highRisk: 16, moderateRisk: 27 },
  { month: "Apr", highRisk: 19, moderateRisk: 25 }
];
