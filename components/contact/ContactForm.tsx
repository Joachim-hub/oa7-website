"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = ["opportunity", "project", "collaboration", "other"] as const;
export type ContactReason = (typeof PROJECT_TYPES)[number];

const REASON_LABELS: Record<ContactReason, string> = {
  opportunity: "A job or opportunity",
  project: "A project",
  collaboration: "A collaboration",
  other: "Something else",
};

const schema = z.object({
  name: z.string().min(1, "Enter your name"),
  email: z.string().min(1, "Enter your email").email("Enter a valid email"),
  projectType: z.enum(PROJECT_TYPES),
  message: z.string().min(10, "Write a little more, ten characters minimum"),
});

type FormValues = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded border border-border-DEFAULT bg-surface-raised px-3.5 py-2.5 text-sm text-secondary-0 placeholder:text-secondary-600 focus:border-accent-ink";

interface ContactFormProps {
  defaultMessage?: string;
  defaultProjectType?: ContactReason;
}

export function ContactForm({ defaultMessage = "", defaultProjectType = "other" }: ContactFormProps) {
  const [prepared, setPrepared] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: defaultProjectType, message: defaultMessage },
  });

  // There is no server behind this site, so the form does not send anything itself.
  // It opens the visitor's email app with the message ready to send to the OA7 inbox.
  function onSubmit(values: FormValues) {
    const subject = `OA7 website: ${REASON_LABELS[values.projectType]}`;
    const body = `${values.message}\n\n${values.name}\n${values.email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  if (prepared) {
    return (
      <div className="rounded-lg border border-border-subtle bg-surface-raised p-8 text-center" role="status">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-success/10 text-success-ink">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-4 font-semibold text-secondary-0">Your email app should now be open.</p>
        <p className="mt-1.5 text-sm text-secondary-500">
          Your message is ready to send, but it has not been sent yet. If nothing opened, email me
          directly at{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent-ink underline underline-offset-4">
            {SITE.email}
          </a>
          .
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={() => setPrepared(false)}>
          Edit message
        </Button>
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
            autoComplete="name"
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
            Your email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
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
          What is this about?
        </label>
        <select id="projectType" className={cn("mt-1.5", inputClasses)} {...register("projectType")}>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {REASON_LABELS[type]}
            </option>
          ))}
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

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Open in my email app
      </Button>
      <p className="text-xs text-secondary-500">
        This opens your email app with the message ready to send to {SITE.email}. Nothing is sent
        until you press send there.
      </p>
    </form>
  );
}
