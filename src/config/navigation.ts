import { routes } from "./routes"

export const navigation = {
  primary: [
    { label: "Marketing", href: routes.marketing },
    { label: "Dashboard", href: routes.dashboard },
    { label: "Login", href: routes.login },
  ],
  dashboard: [
    { label: "Overview", href: routes.dashboard },
    { label: "Billing", href: "/dashboard/billing" },
    { label: "Settings", href: "/dashboard/settings" },
  ],
}
