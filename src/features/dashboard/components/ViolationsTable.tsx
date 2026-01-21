"use client"

import { useMemo } from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"
import { MoreHorizontal, Search } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

export function ViolationsTable() {
  const { push } = useRouter()
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
          <Button
            variant="ghost"
            size="icon"
            aria-label="More actions"
            onClick={(event) => event.stopPropagation()}
          >
            <MoreHorizontal className="size-4" />
          </Button>
        ),
      },
    ],
    [],
  )

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: dashboardData.recentViolations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Violations</p>
          <p className="text-xs text-zinc-500">
            Latest compliance incidents across branches
          </p>
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Export
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-3">
        <div className="relative min-w-55 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search violations" className="bg-white pl-9" />
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Risk
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Status
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Date
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
              <tr
                key={row.id}
                className="cursor-pointer border-t border-zinc-100 transition hover:bg-zinc-50"
                onClick={() => push(`/dashboard/violations/${row.original.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    push(`/dashboard/violations/${row.original.id}`)
                  }
                }}
                role="link"
                tabIndex={0}
                aria-label={`View details for ${row.original.violation}`}
              >
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
