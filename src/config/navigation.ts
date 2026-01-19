import {
  Bell,
  CalendarDays,
  CreditCard,
  FileText,
  LayoutGrid,
  MessageCircle,
  Settings,
  Stethoscope,
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
      { label: "Dashboard", href: routes.dashboard, icon: LayoutGrid },
      { label: "Patients", href: "/dashboard/patients", icon: Users },
      { label: "Appointments", href: "/dashboard/appointments", icon: CalendarDays },
      { label: "Messages", href: "/dashboard/messages", icon: MessageCircle, badge: "24" },
      { label: "Analytics", href: "/dashboard/analytics", icon: Stethoscope },
      { label: "Billing & Payments", href: "/dashboard/billing", icon: CreditCard },
      { label: "Documents", href: "/dashboard/documents", icon: FileText },
    ],
    other: [
      { label: "Settings", href: "/dashboard/settings", icon: Settings },
      { label: "Help Center", href: "/dashboard/help", icon: Bell },
    ],
  },
}
