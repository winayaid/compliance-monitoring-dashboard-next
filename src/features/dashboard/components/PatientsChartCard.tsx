"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { dashboardData } from "../data/dashboard"

const chartColors = {
  selfCare: "#c7d2fe",
  intermediateCare: "#818cf8",
  totalCare: "#312e81",
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number; name: string; color: string }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="mb-2 text-[11px] font-semibold text-zinc-600">{label}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-zinc-500">{entry.name}</span>
            <span className="ml-auto font-semibold text-zinc-900">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PatientsChartCard() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Patients overview
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
            <span>Avg per month</span>
            <span className="font-semibold text-zinc-900">342</span>
            <span className="text-emerald-600">+3.2%</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-zinc-600"
        >
          <Calendar className="size-4" />
          Month
        </Button>
      </div>
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData.chart} barGap={6}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend iconType="circle" iconSize={8} />
            <Bar
              dataKey="selfCare"
              name="Self care"
              stackId="a"
              fill={chartColors.selfCare}
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="intermediateCare"
              name="Intermediate care"
              stackId="a"
              fill={chartColors.intermediateCare}
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="totalCare"
              name="Total care"
              stackId="a"
              fill={chartColors.totalCare}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
