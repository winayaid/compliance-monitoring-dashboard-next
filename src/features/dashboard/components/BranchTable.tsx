"use client"

import { useMemo } from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { branchRiskData, type BranchRiskDatum } from "../data/branches"

const statusStyles: Record<BranchRiskDatum["status"], string> = {
  Stable: "bg-emerald-100 text-emerald-700",
  Watch: "bg-amber-100 text-amber-700",
  Critical: "bg-rose-100 text-rose-700",
}

const riskStyles: Record<"Low" | "Medium" | "High", string> = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-rose-100 text-rose-700",
}

function getRiskLevel(score: number) {
  if (score >= 70) return "High"
  if (score >= 50) return "Medium"
  return "Low"
}

export function BranchTable() {
  const columns = useMemo<ColumnDef<BranchRiskDatum>[]>(
    () => [
      {
        header: "Branch",
        accessorKey: "branch",
        cell: (info) => {
          const row = info.row.original
          return (
            <div>
              <p className="font-medium text-zinc-900">{row.branch}</p>
              <p className="text-xs text-zinc-500">{row.region}</p>
            </div>
          )
        },
      },
      {
        header: "Manager",
        accessorKey: "manager",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Risk score",
        accessorKey: "riskScore",
        cell: (info) => {
          const score = info.getValue<number>()
          const level = getRiskLevel(score)
          return (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyles[level]}`}
            >
              {score}
            </span>
          )
        },
      },
      {
        header: "Open violations",
        accessorKey: "openViolations",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<number>()}</span>
        ),
      },
      {
        header: "Compliance rate",
        accessorKey: "complianceRate",
        cell: (info) => {
          const value = info.getValue<number>()
          return (
            <div className="min-w-28">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Rate</span>
                <span className="font-semibold text-zinc-700">{value}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: `${Math.min(value, 100)}%` }}
                />
              </div>
            </div>
          )
        },
      },
      {
        header: "Last audit",
        accessorKey: "lastAudit",
        cell: (info) => (
          <span className="text-zinc-600">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const status = info.getValue<BranchRiskDatum["status"]>()
          return (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
            >
              {status}
            </span>
          )
        },
      },
    ],
    [],
  )

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: branchRiskData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Branch status</p>
          <p className="text-xs text-zinc-500">
            Compliance performance by branch
          </p>
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Export
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-3">
        <div className="relative min-w-55 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search branch or manager" className="bg-white pl-9" />
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Risk
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Region
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Audit date
        </Button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs text-zinc-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3 py-2 font-medium"
                    scope="col"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-zinc-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
