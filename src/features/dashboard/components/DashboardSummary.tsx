// import { AppointmentsCard } from "./AppointmentsCard"
import { DashboardHeader } from "./DashboardHeader"
// import { DashboardTabs } from "./DashboardTabs"
// import { PatientsChartCard } from "./PatientsChartCard"
// import { QuickAddForm } from "./QuickAddForm"
import { RiskLevelChart } from "./RiskLevelChart"
import { RecentViolationsTable } from "./RecentViolationsTable"
import { StatsCards } from "./StatsCards"
import { ViolationsTrendChart } from "./ViolationsTrendChart"

export function DashboardSummary() {
  return (
    <div className="space-y-6 p-6 pl-0">
      <DashboardHeader />
      {/* <DashboardTabs /> */}
      <StatsCards />
      <div className="grid gap-6 lg:grid-cols-2">
        <ViolationsTrendChart />
        <RiskLevelChart />
      </div>
      <div>
        <RecentViolationsTable />
      </div>
      {/* <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <PatientsChartCard />
          <RecentViolationsTable />
        </div>
        <div className="space-y-6">
          <QuickAddForm />
          <AppointmentsCard />
        </div>
      </div> */}
    </div>
  )
}
