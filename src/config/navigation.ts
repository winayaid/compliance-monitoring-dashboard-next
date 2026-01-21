import {
  AlertTriangle,
  Building2,
  FileText,
  LayoutGrid,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react"

import { routes } from "./routes"

export const navigation = {
  primary: [
    { label: "Marketing", href: routes.marketing },
    { label: "Dashboard", href: routes.dashboard },
    { label: "Login", href: routes.login },
  ],
  dashboard: {
    main: [
      {
        label: "Dashboard",
        href: routes.dashboard,
        icon: LayoutGrid,
      },
      {
        label: "Violations",
        href: "/dashboard/violations",
        icon: AlertTriangle,
      },
      {
        label: "Branches",
        href: "/dashboard/branches",
        icon: Building2,
      },
      {
        label: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
      },
      {
        label: "Users",
        href: "/dashboard/users",
        icon: Users,
      },
    ],
    other: [
      {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        label: "Help Center",
        href: "/dashboard/help",
        icon: LifeBuoy,
      },
    ],
  },
}
