import { Mail, MessageCircle } from "lucide-react";

type InquiryBlockProps = {
  inquiry: {
    whatsappHref: string;
    email: string;
  };
};

export default function InquiryBlock({ inquiry }: InquiryBlockProps) {
  return (
    <div className="absolute left-1/2 top-[60%] z-40 w-full -translate-x-1/2 text-[#f2dc78]">
      <div className="text-center">
        <p
          className="mb-4"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            opacity: 0.8,
          }}
        >
          INQUIRY
        </p>

        <div
          className="flex items-center justify-center gap-6"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(1.2rem, 1.8vw, 1.95rem)",
            fontWeight: 600,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          <a
            href={inquiry.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="relative z-50 flex h-[4.125rem] w-[4.125rem] items-center justify-center rounded-full transition hover:scale-110 hover:bg-[#f2dc78]/10 hover:opacity-80"
          >
            <MessageCircle className="h-12 w-12" strokeWidth={1.7} />
          </a>

          <a
            href={`mailto:${inquiry.email}`}
            aria-label="Send email"
            className="relative z-50 flex h-[4.125rem] w-[4.125rem] items-center justify-center rounded-full transition hover:scale-110 hover:bg-[#f2dc78]/10 hover:opacity-80"
          >
            <Mail className="h-12 w-12" strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </div>
  );
}