import { Activity, FileText, LayoutGrid, Stethoscope } from "lucide-react"

const tabs = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Medical reports", icon: FileText },
  { label: "Patients overview", icon: Activity },
  { label: "Diagnose", icon: Stethoscope },
]

export function DashboardTabs() {
  return (
    <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-2">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = tab.active
        return (
          <button
            key={tab.label}
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition",
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800",
            ].join(" ")}
            type="button"
          >
            <Icon className="size-4" />
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
