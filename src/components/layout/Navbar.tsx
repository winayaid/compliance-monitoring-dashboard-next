import Link from "next/link"

import { APP_NAME } from "@/lib/constants"
import { navigation } from "@/config/navigation"

export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold text-zinc-900">
          {APP_NAME}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
