import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0e7ff_0%,_#f8fafc_45%,_#ffffff_100%)]">
      <div className="mx-auto flex gap-7">
        <Sidebar />
        <main className="flex-1 pb-10 pt-2">{children}</main>
      </div>
    </div>
  )
}
