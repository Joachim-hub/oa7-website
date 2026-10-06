"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { Drawer } from "@/components/ui/Drawer";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo">
      <nav
        aria-label="Primary"
        className={cn(
          "container-oa7 flex items-center justify-between transition-all duration-300 ease-out-expo",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link href="/" className="flex items-center gap-2" aria-label="OA7 home">
          <Logo className="h-9 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => "children" in item && setOpenMega(item.label)}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded px-4 py-2 text-sm font-medium text-secondary-300 transition-colors hover:text-secondary-0"
                aria-expanded={"children" in item ? openMega === item.label : undefined}
                aria-haspopup={"children" in item ? "true" : undefined}
              >
                {item.label}
                {"children" in item && (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </Link>

              {"children" in item && (
                <AnimatePresence>
                  {openMega === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-lg border border-border-subtle bg-surface-raised p-3 shadow-raised">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-md p-3 transition-colors hover:bg-secondary-200/6"
                          >
                            <p className="text-sm font-semibold text-secondary-0">
                              {child.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-secondary-500">
                              {child.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Contact
          </Button>
          <Button href="/pricing" variant="primary" size="sm">
            Get a quote
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded text-secondary-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <Drawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} title="Menu">
        <ul className="flex flex-col gap-1">
          {MAIN_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-3.5 text-base font-medium text-secondary-100 transition-colors hover:bg-secondary-200/6 hover:text-secondary-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item && (
                <ul className="ml-3 flex flex-col gap-0.5 border-l border-border-subtle pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-md px-3 py-2.5 text-sm text-secondary-400 transition-colors hover:bg-secondary-200/6 hover:text-secondary-0"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-5 flex flex-col gap-3">
            <Button href="/contact" variant="outline" fullWidth onClick={() => setMobileOpen(false)}>
              Contact
            </Button>
            <Button href="/pricing" variant="primary" fullWidth onClick={() => setMobileOpen(false)}>
              Get a quote
            </Button>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}
