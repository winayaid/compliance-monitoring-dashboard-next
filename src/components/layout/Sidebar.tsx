import Link from "next/link"

import { navigation } from "@/config/navigation"

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-zinc-200 bg-white p-6 md:block">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Dashboard
      </p>
      <nav className="flex flex-col gap-3 text-sm text-zinc-600">
        {navigation.dashboard.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-2 py-1 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
