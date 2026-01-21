import { ComplianceBarChart } from "@/features/dashboard/components/ComplianceBarChart"
import { ExportButton } from "@/features/dashboard/components/ExportButton"
import { ReportFilters } from "@/features/dashboard/components/ReportFilters"

export default function ReportsPage() {
  return (
    <div className="space-y-6 p-6 pl-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">
            Compliance reports
          </h1>
          <p className="text-sm text-zinc-500">
            Track audits, closure progress, and branch readiness
          </p>
        </div>
        <ExportButton />
      </div>
      <ReportFilters />
      <ComplianceBarChart />
    </div>
  )
}
