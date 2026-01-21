"use client"

import { Calendar, Filter, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ReportFilters() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Report filters</p>
          <p className="text-xs text-zinc-500">
            Focus on branches, audit windows, and compliance priority
          </p>
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          <Filter className="size-4" />
          Quick filters
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-3">
        <div className="relative min-w-56 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search branch or report owner" className="bg-white pl-9" />
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          <MapPin className="size-4" />
          Region
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          <Calendar className="size-4" />
          Date range
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Priority
        </Button>
      </div>
    </section>
  )
}
