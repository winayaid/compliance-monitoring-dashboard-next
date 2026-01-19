"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
// import { signIn } from "@/features/auth/services"

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(values: LoginValues) {
    try {
      // await signIn(values)
      console.log(values)
      push("/dashboard")
    } catch {
      setError("root", { message: "Sign in failed. Please try again." })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <div>
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email ? (
          <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password ? (
          <p className="mt-1 text-xs text-rose-500">
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
      {errors.root ? (
        <p className="text-sm text-rose-600">{errors.root.message}</p>
      ) : null}
      {isSubmitSuccessful && !errors.root ? (
        <p className="text-sm text-emerald-600">Signed in successfully.</p>
      ) : null}
    </form>
  )
}
