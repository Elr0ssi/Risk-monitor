import { NextResponse } from "next/server";
import { countries } from "@/data/mockData";

export async function GET() {
  return NextResponse.json({ data: countries, updatedAt: new Date().toISOString() });
}
