"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = site.nav.map((item) => item.href.split("#")[1] ?? "");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled && !open
          ? "border-b border-line/80 bg-bg/72 backdrop-blur-xl"
          : open
            ? "border-b border-line/80 bg-bg"
            : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-3 px-4 md:h-[72px] md:px-8">
        <a href="/#top" className="label !text-fg hover:!text-accent min-w-0 truncate transition-colors">
          <span className="sm:hidden">{site.name.toUpperCase()}</span>
          <span className="hidden sm:inline">{site.wordmark}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "label link-underline transition-colors",
                active === item.href.split("#")[1] ? "!text-accent" : "hover:!text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/#contact"
            data-cursor="go"
            className="label !text-accent inline-flex min-h-11 items-center px-1"
          >
            Talk →
          </a>
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "absolute h-px w-5 bg-fg transition-transform duration-300",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-fg transition-transform duration-300",
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </div>
    </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-bg px-5 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))] lg:hidden md:top-[72px]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {site.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display flex min-h-14 items-center text-[12vw] leading-none"
                  initial={reduce ? false : { y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex min-h-14 items-center text-[13px] tracking-[0.16em] uppercase text-accent"
              >
                Let&apos;s talk →
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
