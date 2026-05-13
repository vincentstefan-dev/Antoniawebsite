import Link from "next/link";

type MainNavProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function MainNav({ items }: MainNavProps) {
  return (
    <nav className="absolute left-1/2 top-6 z-50 w-full -translate-x-1/2 px-6">
      <ul className="mx-auto flex max-w-[1140px] items-center justify-center gap-15 text-black">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="transition hover:opacity-60"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 1.8vw, 1.875rem)",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}