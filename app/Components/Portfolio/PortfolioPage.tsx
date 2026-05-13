"use client";

import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import { portfolioItems } from "./portfolioData";
import type { PortfolioItem } from "./types";

export default function PortfolioPage() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section className="bg-[#1f2b14] px-6 py-16 text-[#f2dc78] md:px-12">
      <div className="mx-auto max-w-[1180px]">
        <h2
          className="mb-10 text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-[-0.08em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Portfolio
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.title}
              item={item}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </div>
      </div>

      {activeItem && (
        <PortfolioModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
}