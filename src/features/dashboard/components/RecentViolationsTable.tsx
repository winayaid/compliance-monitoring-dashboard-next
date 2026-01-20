"use client"

import { useMemo } from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { dashboardData, type RecentViolation } from "../data/dashboard"

const statusStyles: Record<RecentViolation["status"], string> = {
  Open: "bg-rose-100 text-rose-700",
  "In Review": "bg-amber-100 text-amber-700",
  Resolved: "bg-emerald-100 text-emerald-700",
}

const riskStyles: Record<RecentViolation["risk"], string> = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-rose-100 text-rose-700",
}

export function RecentViolationsTable() {
  const columns = useMemo<ColumnDef<RecentViolation>[]>(
    () => [
      {
        header: "Violation",
        accessorKey: "violation",
        cell: (info) => (
          <span className="font-medium text-zinc-900">
            {info.getValue<string>()}
          </span>
        ),
      },
      {
        header: "Branch",
        accessorKey: "branch",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Risk",
        accessorKey: "risk",
        cell: (info) => {
          const risk = info.getValue<RecentViolation["risk"]>()
          return (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyles[risk]}`}
            >
              {risk}
            </span>
          )
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const status = info.getValue<RecentViolation["status"]>()
          return (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
            >
              {status}
            </span>
          )
        },
      },
      {
        header: "Date / Time",
        accessorKey: "date",
        cell: (info) => {
          const row = info.row.original
          return (
            <span className="text-zinc-600">
              {row.date} • {row.time}
            </span>
          )
        },
      },
      {
        header: "",
        id: "actions",
        cell: () => (
          <Button variant="ghost" size="icon" aria-label="More actions">
            <MoreHorizontal className="size-4" />
          </Button>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data: dashboardData.recentViolations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-zinc-900">
          Recent violations
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-white text-zinc-600">
            Month
          </Button>
          <Button variant="outline" size="sm" className="bg-white text-zinc-600">
            Sort
          </Button>
        </div>
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
                          header.getContext()
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
