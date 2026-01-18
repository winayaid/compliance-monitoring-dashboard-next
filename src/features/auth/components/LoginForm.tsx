"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "@/features/auth/services"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")

    try {
      await signIn({ email, password })
      setStatus("idle")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Signing in..." : "Sign in"}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-600">Sign in failed.</p>
      ) : null}
    </form>
  )
}
