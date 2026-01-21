import { Bell, Download, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Dashboard
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
          Compliance reports are updated in real time
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" className="bg-white">
          <Download className="size-4" />
          Export CSV
        </Button>
        <Button className="bg-indigo-500 text-white hover:bg-indigo-600">
          <Plus className="size-4" />
          Add Violation
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white text-zinc-600"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </Button>
      </div>
    </div>
  )
}
