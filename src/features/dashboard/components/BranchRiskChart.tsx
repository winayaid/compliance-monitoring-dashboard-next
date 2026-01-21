"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { branchRiskData } from "../data/branches"

function BranchRiskTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ dataKey: string; value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  const riskScore = payload.find((item) => item.dataKey === "riskScore")?.value
  const openViolations = payload.find(
    (item) => item.dataKey === "openViolations",
  )?.value

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="mb-2 text-[11px] font-semibold text-zinc-600">{label}</p>
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-500">Risk score</span>
        <span className="font-semibold text-zinc-900">{riskScore}</span>
      </div>
      <div className="mt-1 flex items-center justify-between gap-3">
        <span className="text-zinc-500">Open violations</span>
        <span className="font-semibold text-zinc-900">{openViolations}</span>
      </div>
    </div>
  )
}

export function BranchRiskChart() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Branch risk overview
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Risk score and open violations by branch
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-zinc-600"
        >
          <Calendar className="size-4" />
          Q1 2026
        </Button>
      </div>
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={branchRiskData} barGap={12}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="branch"
              tick={{ fill: "#71717a", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              domain={[0, 100]}
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<BranchRiskTooltip />} />
            <Bar
              dataKey="riskScore"
              yAxisId="left"
              fill="#f97316"
              radius={[10, 10, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="openViolations"
              yAxisId="right"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#2563eb" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
