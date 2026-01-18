"use client"

import { useDashboard } from "../hooks/useDashboard"

export function DashboardSummary() {
  const { stats } = useDashboard()

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-zinc-200 bg-white p-4"
        >
          <p className="text-xs uppercase text-zinc-500">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  )
}
