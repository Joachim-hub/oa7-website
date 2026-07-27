"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().min(1, "Enter your email").email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Wired to the OA7 sales/marketing system once that endpoint exists.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm text-success-ink" role="status">
        <Check className="h-4 w-4" aria-hidden="true" />
        You&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="newsletter-email" className="text-label font-semibold uppercase text-secondary-500">
        Stay updated
      </label>
      <div className="mt-2 flex items-center gap-2">
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@company.com"
          className={cn(
            "h-11 w-full rounded border border-border-DEFAULT bg-surface-raised px-3 text-sm text-secondary-0 placeholder:text-secondary-600 focus:border-accent-400",
            errors.email && "border-error"
          )}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-accent-400 text-ink transition-colors hover:bg-accent-300 disabled:opacity-50"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {errors.email && (
        <p id="newsletter-error" className="mt-2 text-xs text-error-ink" role="alert">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
