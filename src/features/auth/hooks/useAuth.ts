import { useState } from "react"

import type { User } from "../types"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  return {
    user,
    setUser,
    isAuthenticated: Boolean(user),
  }
}
