import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import config from "@/config"

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get("q") || ""

    const dataPath = path.join(process.cwd(), "data", "data.json")
    const jsonData = fs.readFileSync(dataPath, "utf-8")
    const data = JSON.parse(jsonData)

    const searchTerm = query.toLowerCase().trim()

    // Get searchable fields from config, or default to common fields
    const searchFields = config.directory?.searchFields || [
      "name",
      "city",
      "category",
      "adress",
      "address",
    ]

    // Filter data based on search term across multiple fields
    const filteredData = searchTerm
      ? data.filter((item) => {
          return searchFields.some((field) => {
            const value = item[field]
            if (value === null || value === undefined) return false
            return String(value).toLowerCase().includes(searchTerm)
          })
        })
      : data

    // Generate suggestions from the primary search field (usually city or name)
    const suggestionField = config.directory?.suggestionField || "city"
    const suggestions = searchTerm
      ? [
          ...new Set(
            data
              .map((item) => item[suggestionField])
              .filter((value) => value && String(value).toLowerCase().includes(searchTerm))
          ),
        ].slice(0, 5)
      : []

    return NextResponse.json({ items: filteredData, suggestions })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
