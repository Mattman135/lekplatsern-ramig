"use client"

import Link from "next/link"
import Image from "next/image"

import config from "@/config"

const CardComponent = ({ item }) => {
  // Ändra nedan beroende på vad variabel namnen är i data.json
  const name = item["title"] || "Unknown Item"
  const imageUrl = "/icon.jpg" // addera item["photo"] för att få genererade bilder
  const addressField = config.directory?.addressField || "adress"
  const address = item[addressField] || item["address"] || item["adress"]
  const detailRouteField = config.directory?.detailRouteField || "name"
  const detailRoute = item[detailRouteField] || name

  return (
    <div className="card bg-base-100 w-96 shadow-sm group overflow-hidden items-center">
      {imageUrl && (
        <figure className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {item["category"] && (
          <p className="text-sm text-base-content/60">{item["category"]}</p>
        )}
        <div className="card-actions justify-end">
          <Link
            href={`/pages/b/${encodeURIComponent(detailRoute)}`}
            className="text-blue-600 hover:underline"
          >
            {address}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
