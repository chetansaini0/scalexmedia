"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  cursor?: "go" | "view" | "explore";
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  href,
  type = "button",
  onClick,
  cursor = "go",
  disabled,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (event: React.MouseEvent) => {
    const node = ref.current;
    if (
      !node ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.22, y: y * 0.22 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const shared = {
    className: cn(
      "group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-6 text-[13px] tracking-[0.16em] uppercase transition-colors md:min-h-12",
      className,
    ),
    onMouseMove: onMove,
    onMouseLeave: reset,
    style: { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` },
    "data-cursor": cursor,
  };

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...shared}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...shared}
    >
      {content}
    </button>
  );
}
