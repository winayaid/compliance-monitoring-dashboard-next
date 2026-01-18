type HttpOptions = RequestInit & {
  baseUrl?: string
}

export async function http<T>(path: string, options: HttpOptions = {}) {
  const { baseUrl = "", ...init } = options
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  return (await response.json()) as T
}
