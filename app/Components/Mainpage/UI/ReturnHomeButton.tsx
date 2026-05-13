import Link from "next/link";
import { House } from "lucide-react";

type ReturnHomeButtonProps = {
  href: string;
};

export default function ReturnHomeButton({ href }: ReturnHomeButtonProps) {
  return (
    <div className="absolute bottom-6 right-6 z-30">
      <Link
        href={href}
        aria-label="Return to portfolio"
        className="group flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition hover:bg-white/50"
      >
        <House
          className="h-5 w-5 text-white transition-transform duration-100 group-hover:scale-110"
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
}