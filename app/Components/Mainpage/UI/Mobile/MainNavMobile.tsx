"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type MainNavMobileProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function MainNavMobile({ items }: MainNavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute right-5 top-5 z-50 md:right-7 md:top-7">
      <div className="w-[220px] text-right md:w-[260px]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-full border border-black/40 bg-white/20 px-4 py-2 text-black backdrop-blur-sm transition hover:bg-white/35 md:px-5 md:py-2.5"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          <span className="mr-2">Menu</span>
          {isOpen ? (
            <X className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
          ) : (
            <Menu className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
          )}
        </button>

        <div
          className={`ml-auto mt-3 overflow-hidden rounded-2xl border border-black/25 bg-white/25 text-black backdrop-blur-md transition-all duration-300 md:mt-4 ${
            isOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <ul className="flex flex-col items-end gap-2 px-5 py-4 md:gap-3 md:px-6 md:py-5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block transition hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)",
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}