import { AlertCircle, CheckCircle2, Clock4 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type RecentViolation } from "../data/dashboard"

const statusOptions: Array<{
  value: RecentViolation["status"]
  label: string
  helper: string
  icon: typeof AlertCircle
}> = [
  {
    value: "Open",
    label: "Open",
    helper: "Investigation in progress",
    icon: AlertCircle,
  },
  {
    value: "In Review",
    label: "In Review",
    helper: "Awaiting compliance approval",
    icon: Clock4,
  },
  {
    value: "Resolved",
    label: "Resolved",
    helper: "Corrective actions complete",
    icon: CheckCircle2,
  },
]

type UpdateStatusPanelProps = {
  currentStatus: RecentViolation["status"]
  nextReview: string
}

export function UpdateStatusPanel({
  currentStatus,
  nextReview,
}: UpdateStatusPanelProps) {
  return (
    <aside className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm">
      <p className="text-sm font-semibold text-zinc-900">Update status</p>
      <p className="text-xs text-zinc-500">
        Log progress and keep the compliance team aligned.
      </p>
      <div className="mt-4 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Current status
        </p>
        <p className="mt-1 text-sm font-semibold text-zinc-900">
          {currentStatus}
        </p>
        <p className="mt-3 text-xs text-zinc-500">
          Next review scheduled: {nextReview}
        </p>
      </div>
      <div className="mt-4 space-y-3">
        {statusOptions.map((status) => {
          const Icon = status.icon
          return (
            <button
              key={status.value}
              type="button"
              className={[
                "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition",
                currentStatus === status.value
                  ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                  : "border-zinc-200/70 bg-white text-zinc-600 hover:bg-zinc-50",
              ].join(" ")}
            >
              <span className="flex items-center gap-3">
                <span
                  className={[
                    "flex size-9 items-center justify-center rounded-full",
                    currentStatus === status.value
                      ? "bg-indigo-500 text-white"
                      : "bg-zinc-100 text-zinc-500",
                  ].join(" ")}
                >
                  <Icon className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {status.label}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {status.helper}
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Update note
          </p>
          <textarea
            className="mt-2 h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-zinc-700 shadow-xs outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Add a short update for the compliance log..."
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Notify
          </p>
          <Input
            placeholder="Add stakeholder email or team name"
            className="mt-2 bg-white"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-indigo-500 text-white hover:bg-indigo-600">
            Save update
          </Button>
          <Button variant="outline" className="bg-white text-zinc-600">
            Send reminder
          </Button>
        </div>
      </div>
    </aside>
  )
}
