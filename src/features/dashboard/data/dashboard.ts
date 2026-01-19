import rawDashboardData from "./dashboard.json"

export type DashboardStat = {
  label: string
  value: number
  change: number
  trend: "up" | "down"
}

export type ChartDatum = {
  month: string
  selfCare: number
  intermediateCare: number
  totalCare: number
}

export type Appointment = {
  id: string
  title: string
  time: string
  doctor: string
  duration: string
}

export type TestResult = {
  id: string
  patient: string
  test: string
  status: "In Progress" | "Completed" | "Pending"
  date: string
  time: string
}

export type DashboardData = {
  stats: DashboardStat[]
  chart: ChartDatum[]
  appointments: Appointment[]
  tests: TestResult[]
}

export const dashboardData = rawDashboardData as DashboardData
