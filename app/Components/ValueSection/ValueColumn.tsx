type ValueColumnProps = {
  paragraphs: string[];
};

export default function ValueColumn({ paragraphs }: ValueColumnProps) {
  return (
    <div
      className="space-y-7 text-[clamp(0.95rem,1.25vw,1.15rem)] font-bold leading-[1.08] tracking-[-0.06em]"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}