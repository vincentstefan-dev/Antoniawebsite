import Image from "next/image";
import type { PortfolioItem } from "./types";

type PortfolioCardProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[0.83] overflow-hidden text-left"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />

      <div className="absolute inset-0 flex flex-col justify-between px-6 py-7 text-center">
        <h3
          className="text-[clamp(1.7rem,2.4vw,2.4rem)] font-semibold leading-none tracking-[-0.06em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {item.title}
        </h3>

        <p
          className="text-[clamp(1.05rem,1.5vw,1.35rem)] font-bold leading-[1.15] tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {item.subtitle}
        </p>
      </div>
    </button>
  );
}