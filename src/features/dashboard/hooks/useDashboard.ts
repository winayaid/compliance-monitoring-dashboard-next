import { useEffect, useState } from "react"

import { fetchDashboardStats, type DashboardStat } from "../services"

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStat[]>([])

  useEffect(() => {
    let mounted = true

    fetchDashboardStats().then((data) => {
      if (mounted) setStats(data)
    })

    return () => {
      mounted = false
    }
  }, [])

  return { stats }
}
