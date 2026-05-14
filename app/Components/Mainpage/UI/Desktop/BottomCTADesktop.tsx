type BottomCTAProps = {
  text: string;
};

export default function BottomCTA({ text }: BottomCTAProps) {
  return (
    <div className="absolute bottom-[10%] left-[52%] z-20 w-full -translate-x-1/2 px-6 text-center">
      <p
        className="mx-auto max-w-5xl text-[#f2dc78]"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(1.2rem, 1.8vw, 1.875rem)",
          fontWeight: 700,
          lineHeight: 1.1,

          // darker outside edge / stroke effect
          textShadow: `
            -1px -1px 0 #8f6f18,
             1px -1px 0 #8f6f18,
            -1px  1px 0 #8f6f18,
             1px  1px 0 #8f6f18,
             0px  2px 4px rgba(0, 0, 0, 0.85)
          `,
        }}
      >
        {text}
      </p>
    </div>
  );
}