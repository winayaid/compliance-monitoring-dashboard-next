import { cn } from "@/lib/cn"

type ModalProps = {
  open: boolean
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ open, title, children, className }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div
        className={cn(
          "w-full max-w-md rounded-lg bg-white p-6 text-zinc-900 shadow-xl",
          className
        )}
      >
        {title ? (
          <h2 className="mb-4 text-lg font-semibold text-zinc-900">{title}</h2>
        ) : null}
        {children}
      </div>
    </div>
  )
}
