import type { User } from "@/features/auth/types"
import { http } from "./http"

export function getCurrentUser() {
  return http<User>("/api/users/me")
}
