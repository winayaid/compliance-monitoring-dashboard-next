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
import { dashboardData, type TestResult } from "../data/dashboard"

const statusStyles: Record<TestResult["status"], string> = {
  "In Progress": "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-zinc-100 text-zinc-600",
}

export function ResultsTable() {
  const columns = useMemo<ColumnDef<TestResult>[]>(
    () => [
      {
        header: "Patient",
        accessorKey: "patient",
        cell: (info) => (
          <span className="font-medium text-zinc-900">
            {info.getValue<string>()}
          </span>
        ),
      },
      {
        header: "Test",
        accessorKey: "test",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const status = info.getValue<TestResult["status"]>()
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
    data: dashboardData.tests,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-zinc-900">Test results</p>
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
