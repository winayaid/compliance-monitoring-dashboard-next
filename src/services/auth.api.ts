import type { User } from "@/features/auth/types"
import { http } from "./http"

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  user: User
  token: string
}

export function login(payload: LoginPayload) {
  return http<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  })
}
