"use client"

import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ExportButton() {
  return (
    <Button variant="outline" size="sm" className="bg-white text-zinc-600">
      <Download className="size-4" />
      Export report
    </Button>
  )
}
