import { type ViolationTimelineEvent } from "../data/violations"

type ViolationTimelineProps = {
  events: ViolationTimelineEvent[]
}

export function ViolationTimeline({ events }: ViolationTimelineProps) {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-zinc-900">
          Violation timeline
        </p>
        <p className="text-xs text-zinc-500">
          Track actions taken and milestones reached
        </p>
      </div>
      <div className="mt-4 space-y-4">
        {events.map((event, index) => (
          <div key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-1 size-2 rounded-full bg-indigo-500" />
              {index < events.length - 1 ? (
                <span className="mt-2 h-full w-px bg-indigo-100" />
              ) : null}
            </div>
            <div className="flex-1 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-zinc-900">
                  {event.title}
                </p>
                <span className="text-xs text-zinc-500">{event.date}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">
                {event.description}
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                Updated by {event.actor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
