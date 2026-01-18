type AlertProps = {
  title: string
  description?: string
}

export function Alert({ title, description }: AlertProps) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <p className="text-sm font-semibold">{title}</p>
      {description ? (
        <p className="mt-1 text-sm text-amber-800">{description}</p>
      ) : null}
    </div>
  )
}
