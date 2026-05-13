type BottomCTAMobileProps = {
  text: string;
};

export default function BottomCTAMobile({ text }: BottomCTAMobileProps) {
  return (
    <div className="absolute bottom-[8%] left-1/2 z-20 w-full -translate-x-1/2 px-5 text-center sm:bottom-[9%] md:bottom-[10%]">
      <p
        className="mx-auto max-w-[340px] text-[#f2dc78] sm:max-w-[420px] md:max-w-[520px]"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(0.82rem, 2.4vw, 1.25rem)",
          fontWeight: 700,
          lineHeight: 1.15,
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