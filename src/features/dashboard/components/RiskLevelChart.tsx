"use client"

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts"

import { dashboardData } from "../data/dashboard"

const riskColors = {
  Low: "#16a34a",
  Medium: "#f59e0b",
  High: "#ef4444",
}

function RiskTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; payload: { level: string } }>
}) {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-500">{entry.payload.level}</span>
        <span className="font-semibold text-zinc-900">{entry.value}</span>
      </div>
    </div>
  )
}

export function RiskLevelChart() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-zinc-900">Risk level mix</p>
        <p className="mt-1 text-xs text-zinc-500">
          Distribution of current violations
        </p>
      </div>
      <div className="mt-4 h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<RiskTooltip />} />
            <Legend iconType="circle" iconSize={8} />
            <Pie
              data={dashboardData.riskLevels}
              dataKey="value"
              nameKey="level"
              innerRadius={50}
              outerRadius={85}
              stroke="transparent"
            >
              {dashboardData.riskLevels.map((entry) => (
                <Cell
                  key={entry.level}
                  fill={riskColors[entry.level]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
