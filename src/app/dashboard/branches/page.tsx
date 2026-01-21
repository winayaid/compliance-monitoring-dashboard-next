import { BranchRiskChart } from "@/features/dashboard/components/BranchRiskChart"
import { BranchTable } from "@/features/dashboard/components/BranchTable"

export default function BranchesPage() {
  return (
    <div className="space-y-6 p-6 pl-0">
      <BranchRiskChart />
      <BranchTable />
    </div>
  )
}
