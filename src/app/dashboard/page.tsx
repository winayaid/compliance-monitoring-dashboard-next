import { Alert } from "@/components/feedback/Alert"
import { DashboardSummary } from "@/features/dashboard/components/DashboardSummary"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <p className="text-sm text-zinc-600">
          Feature-based structure keeps business logic grouped.
        </p>
      </div>
      <Alert
        title="Demo data"
        description="Dashboard cards below come from a feature service."
      />
      <DashboardSummary />
    </div>
  )
}
