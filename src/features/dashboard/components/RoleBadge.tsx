"use client"

import type { UserRole } from "../data/users"

const roleStyles: Record<UserRole, string> = {
  "Compliance Officer": "bg-sky-100 text-sky-700",
  "Risk Analyst": "bg-indigo-100 text-indigo-700",
  "Branch Manager": "bg-emerald-100 text-emerald-700",
  "Audit Lead": "bg-amber-100 text-amber-700",
  "Quality Reviewer": "bg-rose-100 text-rose-700",
}

export function RoleBadge({ role }: { role: UserRole }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${roleStyles[role]}`}
    >
      {role}
    </span>
  )
}
