"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  specialty: z.string().min(2, "Specialty is required"),
  email: z.string().email("Enter a valid email"),
})

type FormValues = z.infer<typeof formSchema>

export function QuickAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: FormValues) => {
    console.log("Quick add doctor", values)
    reset()
  }

  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <UserPlus className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Quick add doctor
          </p>
          <p className="text-xs text-zinc-500">
            Create a profile for your next specialist.
          </p>
        </div>
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder="Doctor name" {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <Input placeholder="Specialty" {...register("specialty")} />
          {errors.specialty ? (
            <p className="mt-1 text-xs text-rose-500">
              {errors.specialty.message}
            </p>
          ) : null}
        </div>
        <div>
          <Input placeholder="Email address" type="email" {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
          ) : null}
        </div>
        <Button
          type="submit"
          className="w-full bg-indigo-500 text-white hover:bg-indigo-600"
          disabled={isSubmitting}
        >
          Create profile
        </Button>
      </form>
    </section>
  )
}
