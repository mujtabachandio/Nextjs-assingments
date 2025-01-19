// app/api/external/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    // Limiting to 20 images for gallery purposes
    const limitedData = data.slice(0, 20);

    return NextResponse.json(limitedData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
