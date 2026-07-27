"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(1, "Enter your name"),
  email: z.string().min(1, "Enter your email").email("Enter a valid email"),
  projectType: z.enum(["template", "custom", "not-sure"]),
  message: z.string().min(10, "Tell us a little more, ten characters minimum"),
});

type FormValues = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded border border-border-DEFAULT bg-surface-raised px-3.5 py-2.5 text-sm text-secondary-0 placeholder:text-secondary-600 focus:border-accent-ink";

interface ContactFormProps {
  defaultMessage?: string;
  defaultProjectType?: "template" | "custom" | "not-sure";
}

export function ContactForm({ defaultMessage = "", defaultProjectType = "not-sure" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: defaultProjectType, message: defaultMessage },
  });

  async function onSubmit(values: FormValues) {
    // No backend wired up yet — this is the integration seam for the
    // contact/sales workflow. Swap this for a real submission call
    // (email service, CRM, etc.) when that exists; nothing else on this
    // page depends on how it's implemented.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border-subtle bg-surface-raised p-8 text-center" role="status">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success-ink">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-4 font-semibold text-secondary-0">Message sent.</p>
        <p className="mt-1.5 text-sm text-secondary-500">
          We&rsquo;ll get back to you within a couple of business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-secondary-200">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={cn("mt-1.5", inputClasses, errors.name && "border-error")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-error-ink" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-secondary-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={cn("mt-1.5", inputClasses, errors.email && "border-error")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-error-ink" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium text-secondary-200">
          What are you looking for?
        </label>
        <select id="projectType" className={cn("mt-1.5", inputClasses)} {...register("projectType")}>
          <option value="not-sure">Not sure yet</option>
          <option value="template">A template</option>
          <option value="custom">A custom project</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-secondary-200">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn("mt-1.5 resize-none", inputClasses, errors.message && "border-error")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-error-ink" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
