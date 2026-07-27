import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official OA7 logo (icon + wordmark lockup). The source file is
 * white/light-colored on a transparent background, so it's only legible
 * against a dark surface — see the note on Navbar/Footer staying dark
 * regardless of site theme.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="OA7"
        width={896}
        height={370}
        sizes="120px"
        className="h-full w-auto object-contain"
        priority
      />
    </span>
  );
}
