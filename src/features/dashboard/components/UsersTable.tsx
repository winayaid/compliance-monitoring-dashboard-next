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
import { RoleBadge } from "./RoleBadge"
import { usersData, type UserRecord, type UserStatus } from "../data/users"

const statusStyles: Record<UserStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Pending: "bg-zinc-100 text-zinc-700",
}

export function UsersTable() {
  const columns = useMemo<ColumnDef<UserRecord>[]>(
    () => [
      {
        header: "User",
        accessorKey: "name",
        cell: (info) => {
          const row = info.row.original
          return (
            <div>
              <p className="font-medium text-zinc-900">{row.name}</p>
              <p className="text-xs text-zinc-500">{row.email}</p>
            </div>
          )
        },
      },
      {
        header: "Branch",
        accessorKey: "branch",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Role",
        accessorKey: "role",
        cell: (info) => <RoleBadge role={info.getValue<UserRecord["role"]>()} />,
      },
      {
        header: "Open cases",
        accessorKey: "openCases",
        cell: (info) => (
          <span className="text-zinc-700">{info.getValue<number>()}</span>
        ),
      },
      {
        header: "Last active",
        accessorKey: "lastActive",
        cell: (info) => (
          <span className="text-zinc-600">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const status = info.getValue<UserStatus>()
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
    data: usersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Users</p>
          <p className="text-xs text-zinc-500">
            Compliance team access across branches
          </p>
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Invite user
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-3">
        <div className="relative min-w-56 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search name or branch" className="bg-white pl-9" />
        </div>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Role
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Status
        </Button>
        <Button variant="outline" size="sm" className="bg-white text-zinc-600">
          Activity
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
