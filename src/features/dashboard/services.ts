export type DashboardStat = {
  label: string
  value: number
}

export async function fetchDashboardStats(): Promise<DashboardStat[]> {
  return [
    { label: "Total revenue", value: 124_500 },
    { label: "Active projects", value: 18 },
    { label: "Support tickets", value: 4 },
  ]
}
