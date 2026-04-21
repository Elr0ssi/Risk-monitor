import { NextResponse } from "next/server";
import { riskEvents } from "@/data/mockData";

export async function GET() {
  return NextResponse.json({ data: riskEvents, updatedAt: new Date().toISOString() });
}
