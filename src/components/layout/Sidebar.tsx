import Link from "next/link"
import { LogOut, Search, Sparkles } from "lucide-react"

import { navigation } from "@/config/navigation"
import { Input } from "@/components/ui/input"

export function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col justify-between rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur md:flex">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-900">
            <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-500 text-white">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">PulseHub</p>
              <p className="text-xs text-zinc-500">Care dashboard</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search" className="bg-white pl-9" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Main menu
          </p>
          <nav className="mt-3 space-y-1 text-sm text-zinc-600">
            {navigation.dashboard.main.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="size-4" />
                    {item.label}
                  </span>
                  {item.badge ? (
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              )
            })}
          </nav>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Other
          </p>
          <nav className="mt-3 space-y-1 text-sm text-zinc-600">
            {navigation.dashboard.other.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-indigo-900">
          <p className="font-semibold">Upgrade to Business Plan</p>
          <p className="mt-1 text-xs text-indigo-700/80">
            Unlock advanced insights and team collaboration.
          </p>
          <button
            className="mt-3 w-full rounded-lg bg-indigo-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-600"
            type="button"
          >
            Upgrade plan
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-zinc-200/80 pt-4">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Scott Beier</p>
          <p className="text-xs text-zinc-500">Super Admin</p>
        </div>
        <button
          className="text-zinc-400 transition hover:text-zinc-600"
          type="button"
          aria-label="Log out"
        >
          <LogOut className="size-4" />
        </button>
      </div>
    </aside>
  )
}
