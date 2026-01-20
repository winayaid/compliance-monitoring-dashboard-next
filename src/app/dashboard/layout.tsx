import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e0e7ff_0%,#f8fafc_45%,#ffffff_100%)]">
      <div className="mx-auto flex gap-7">
        <Sidebar />
        <main className="flex-1 pb-10 pt-2">{children}</main>
      </div>
    </div>
  )
}
