import { LoginForm } from "@/features/auth/components/LoginForm"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl text-center font-bold">Compliance Monitoring</h1>
        <p className="mt-2 text-sm text-zinc-600 text-center">
          Sign in to access your dashboard.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
