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
import { TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { complianceReportData } from "../data/reports"

function ComplianceTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ dataKey: string; value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  const rate = payload.find((item) => item.dataKey === "complianceRate")?.value
  const target = payload.find((item) => item.dataKey === "targetRate")?.value

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="mb-2 text-[11px] font-semibold text-zinc-600">{label}</p>
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-500">Compliance</span>
        <span className="font-semibold text-zinc-900">{rate}%</span>
      </div>
      <div className="mt-1 flex items-center justify-between gap-3">
        <span className="text-zinc-500">Target</span>
        <span className="font-semibold text-zinc-900">{target}%</span>
      </div>
    </div>
  )
}

export function ComplianceBarChart() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Compliance performance
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Monthly completion rate vs target
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-zinc-600"
        >
          <TrendingUp className="size-4" />
          Last 6 months
        </Button>
      </div>
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={complianceReportData} barGap={12}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#71717a", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ComplianceTooltip />} />
            <Bar
              dataKey="complianceRate"
              fill="#0ea5e9"
              radius={[10, 10, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="targetRate"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#f97316" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid gap-3 text-xs text-zinc-500 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/60 p-3">
          <p className="font-semibold text-zinc-900">Average compliance</p>
          <p className="mt-1">89.5% across all audited branches</p>
        </div>
        <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/60 p-3">
          <p className="font-semibold text-zinc-900">Audits completed</p>
          <p className="mt-1">255 audits with 379 findings closed</p>
        </div>
        <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/60 p-3">
          <p className="font-semibold text-zinc-900">Top improvement</p>
          <p className="mt-1">Jakarta Central closed 18 open issues</p>
        </div>
      </div>
    </section>
  )
}
