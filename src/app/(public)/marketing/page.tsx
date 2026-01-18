import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <section className="rounded-2xl bg-white p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Public route group
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-900">
            Marketing page example
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            Route groups keep your public content organized without changing the
            URL structure.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild>
              <Link href="/dashboard">View dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
