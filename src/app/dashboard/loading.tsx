export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-6 w-40 animate-pulse rounded bg-zinc-200" />
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="h-24 animate-pulse rounded-xl bg-white"
          />
        ))}
      </div>
    </div>
  )
}
