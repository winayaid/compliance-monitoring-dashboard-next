"use client"

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { dashboardData } from "../data/dashboard"

function TrendTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="mb-2 text-[11px] font-semibold text-zinc-600">{label}</p>
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-500">Violations</span>
        <span className="font-semibold text-zinc-900">{payload[0].value}</span>
      </div>
    </div>
  )
}

export function ViolationsTrendChart() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Violations trend
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Weekly total across branches
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-zinc-600"
        >
          <Calendar className="size-4" />
          Range
        </Button>
      </div>
      <div className="mt-4 h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dashboardData.violationsTrend}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="dateRange"
              tick={{ fill: "#71717a", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<TrendTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563eb" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
