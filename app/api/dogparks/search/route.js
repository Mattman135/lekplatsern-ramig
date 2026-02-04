import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const city = searchParams.get("city") || ""

    const dataPath = path.join(process.cwd(), "data", "data.json")
    const jsonData = fs.readFileSync(dataPath, "utf-8")
    const data = JSON.parse(jsonData)

    const searchTerm = city.toLowerCase()
    const filteteredData = data.filter((item) =>
      item.city.toLowerCase().includes(searchTerm)
    )

    const allCities = [...new Set(data.map((item) => item.city))]
    const suggestions = allCities
      .filter((cityName) => cityName.toLowerCase().includes(searchTerm))
      .slice(0, 5)

    return NextResponse.json({ items: filteteredData, suggestions })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
