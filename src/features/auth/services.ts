import type { LoginPayload, LoginResponse } from "@/services/auth.api"
import { login } from "@/services/auth.api"

export function signIn(payload: LoginPayload): Promise<LoginResponse> {
  return login(payload)
}
