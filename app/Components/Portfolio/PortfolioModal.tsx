import Image from "next/image";
import { X } from "lucide-react";
import type { PortfolioItem } from "./types";

type PortfolioModalProps = {
  item: PortfolioItem;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
      <div className="relative max-h-[86vh] w-full max-w-[820px] overflow-y-auto bg-[#1f2b14] p-6 text-[#f2dc78] shadow-2xl md:p-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-[#f2dc78]/50 p-2 transition hover:bg-[#f2dc78] hover:text-[#1f2b14]"
          aria-label="Close portfolio popup"
        >
          <X size={20} />
        </button>

        <div className="relative mb-8 aspect-video w-full overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>

        <h3
          className="mb-6 pr-12 text-[clamp(3rem,6vw,5.5rem)] leading-[0.85] tracking-[-0.08em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {item.popupTitle}
        </h3>

        <div
          className="space-y-6 text-[clamp(1.15rem,1.8vw,1.45rem)] font-bold leading-[1.25] tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {item.work.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="pt-6">
            <h4 className="mb-3 text-2xl">How the work was done</h4>
            <p>
              Strategy came first: what should the viewer feel, what should they
              understand, and what action should the edit move them toward. From
              there, the footage was shaped through pacing, sequence structure,
              sound, emotional contrast, and visual hierarchy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}