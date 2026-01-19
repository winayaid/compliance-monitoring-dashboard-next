import { AppointmentsCard } from "./AppointmentsCard"
import { DashboardHeader } from "./DashboardHeader"
import { DashboardTabs } from "./DashboardTabs"
import { PatientsChartCard } from "./PatientsChartCard"
import { QuickAddForm } from "./QuickAddForm"
import { ResultsTable } from "./ResultsTable"
import { StatsCards } from "./StatsCards"

export function DashboardSummary() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardTabs />
      <StatsCards />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <PatientsChartCard />
          <ResultsTable />
        </div>
        <div className="space-y-6">
          <QuickAddForm />
          <AppointmentsCard />
        </div>
      </div>
    </div>
  )
}
