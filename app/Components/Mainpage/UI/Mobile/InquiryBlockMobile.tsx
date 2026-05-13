import { Mail, MessageCircle } from "lucide-react";

type InquiryBlockMobileProps = {
  inquiry: {
    whatsappHref: string;
    email: string;
  };
};

export default function InquiryBlockMobile({
  inquiry,
}: InquiryBlockMobileProps) {
  return (
    <div className="absolute left-1/2 top-[63%] z-40 w-full -translate-x-1/2 px-5 text-center text-[#f2dc78] sm:top-[64%] md:top-[66%]">
      <p
        className="mb-3 md:mb-4"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(0.8rem, 2.4vw, 1.1rem)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          opacity: 0.8,
        }}
      >
        INQUIRY
      </p>

      <div className="flex items-center justify-center gap-4 md:gap-5">
        <a
          href={inquiry.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110 hover:bg-[#f2dc78]/10 hover:opacity-80 md:h-12 md:w-12"
        >
          <MessageCircle className="h-8 w-8 md:h-9 md:w-9" strokeWidth={1.7} />
        </a>

        <a
          href={`mailto:${inquiry.email}`}
          aria-label="Send email"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110 hover:bg-[#f2dc78]/10 hover:opacity-80 md:h-12 md:w-12"
        >
          <Mail className="h-8 w-8 md:h-9 md:w-9" strokeWidth={1.7} />
        </a>
      </div>
    </div>
  );
}