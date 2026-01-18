import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto flex max-w-6xl">
        <Sidebar />
        <main className="flex-1 px-6 py-10">{children}</main>
      </div>
    </div>
  )
}
