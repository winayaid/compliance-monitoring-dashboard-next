import { ArrowDownRight, ArrowUpRight, MoreVertical } from "lucide-react"

import { dashboardData } from "../data/dashboard"

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardData.stats.map((stat) => {
        const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
        const trendColor =
          stat.trend === "up" ? "text-emerald-600" : "text-rose-500"

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-zinc-600">{stat.label}</p>
              <button
                className="text-zinc-400 transition hover:text-zinc-600"
                type="button"
                aria-label="Card options"
              >
                <MoreVertical className="size-4" />
              </button>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-2xl font-semibold text-zinc-900">
                {stat.value.toLocaleString()}
              </p>
              <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
                <TrendIcon className="size-4" />
                {Math.abs(stat.change)}%
              </div>
            </div>
            <p className="mt-1 text-xs text-zinc-500">since last week</p>
          </div>
        )
      })}
    </div>
  )
}
