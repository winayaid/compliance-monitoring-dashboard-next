import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { EvidenceGallery } from "@/features/dashboard/components/EvidenceGallery"
import { UpdateStatusPanel } from "@/features/dashboard/components/UpdateStatusPanel"
import { ViolationSummaryCard } from "@/features/dashboard/components/ViolationSummaryCard"
import { ViolationTimeline } from "@/features/dashboard/components/ViolationTimeline"
import { dashboardData } from "@/features/dashboard/data/dashboard"
import { violationDetails } from "@/features/dashboard/data/violations"

type ViolationDetailPageProps = {
  params: Promise<{ id: string }>
}

export default async function ViolationDetailPage({
  params,
}: ViolationDetailPageProps) {
  const { id } = await params
  const violation = dashboardData.recentViolations.find(
    (item) => item.id === id
  )
  const detail = violationDetails[id]

  if (!violation || !detail) {
    notFound()
  }

  return (
    <div className="space-y-6 p-6 pl-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/dashboard/violations"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-700"
          >
            Back to violations
          </Link>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-900">
            Violation details
          </h1>
          <p className="text-sm text-zinc-600">
            Review evidence, coordinate response, and track resolution.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="bg-white text-zinc-600">
            Export case
          </Button>
          <Button className="bg-indigo-500 text-white hover:bg-indigo-600">
            Assign reviewer
          </Button>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <ViolationSummaryCard violation={violation} detail={detail} />
          <EvidenceGallery evidence={detail.evidence} />
          <ViolationTimeline events={detail.timeline} />
        </div>
        <UpdateStatusPanel
          currentStatus={violation.status}
          nextReview={detail.nextReview}
        />
      </div>
    </div>
  )
}
