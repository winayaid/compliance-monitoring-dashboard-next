import { FileText, Image, Film, ScrollText } from "lucide-react"

import { type ViolationEvidence } from "../data/violations"

const statusStyles: Record<ViolationEvidence["status"], string> = {
  Verified: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Missing: "bg-rose-100 text-rose-700",
}

const typeIcons: Record<ViolationEvidence["type"], typeof Image> = {
  Photo: Image,
  Document: FileText,
  Log: ScrollText,
  Video: Film,
}

type EvidenceGalleryProps = {
  evidence: ViolationEvidence[]
}

export function EvidenceGallery({ evidence }: EvidenceGalleryProps) {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Evidence gallery
          </p>
          <p className="text-xs text-zinc-500">
            Documents and media supporting the investigation
          </p>
        </div>
        <button
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          type="button"
        >
          Request missing files
        </button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {evidence.map((item) => {
          const Icon = typeIcons[item.type]
          return (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <Icon className="size-4 text-zinc-400" />
                  {item.type}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-800">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{item.date}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
