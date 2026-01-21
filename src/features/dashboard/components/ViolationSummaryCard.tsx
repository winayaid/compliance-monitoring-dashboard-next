import { type RecentViolation } from "../data/dashboard"
import { type ViolationDetail } from "../data/violations"

const riskStyles: Record<RecentViolation["risk"], string> = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-rose-100 text-rose-700",
}

const statusStyles: Record<RecentViolation["status"], string> = {
  Open: "bg-rose-100 text-rose-700",
  "In Review": "bg-amber-100 text-amber-700",
  Resolved: "bg-emerald-100 text-emerald-700",
}

type ViolationSummaryCardProps = {
  violation: RecentViolation
  detail: ViolationDetail
}

export function ViolationSummaryCard({
  violation,
  detail,
}: ViolationSummaryCardProps) {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Violation summary
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-900">
            {violation.violation}
          </h2>
          <p className="mt-2 text-sm text-zinc-600">{detail.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyles[violation.risk]}`}
          >
            {violation.risk} risk
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[violation.status]}`}
          >
            {violation.status}
          </span>
        </div>
      </div>
      <div className="mt-5 grid gap-4 text-sm text-zinc-600 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-xs text-zinc-500 font-medium">Location</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.location}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium">Category</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.category}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium">Regulation</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.regulation}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium">Assigned to</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.assignedTo}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium">Last updated</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.lastUpdated}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 font-medium">Impact</p>
          <p className="mt-1 text-sm font-semibold  text-zinc-900">
            {detail.impact}
          </p>
        </div>
      </div>
    </section>
  )
}
