import { Clock, User } from "lucide-react"

import { dashboardData } from "../data/dashboard"

export function AppointmentsCard() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-zinc-900">Appointments</p>
        <button
          className="text-xs font-semibold text-indigo-600 transition hover:text-indigo-700"
          type="button"
        >
          See all
        </button>
      </div>
      <div className="mt-4 space-y-3">
        {dashboardData.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="rounded-xl border border-zinc-200/80 bg-white p-3 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  {appointment.title}
                </p>
                <p className="text-xs text-zinc-500">{appointment.time}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <Clock className="size-3.5" />
                {appointment.duration}
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
              <span className="flex size-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <User className="size-4" />
              </span>
              {appointment.doctor}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
