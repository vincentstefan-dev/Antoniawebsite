import { responsiveConfig as rc } from "../Config/responsiveConfig";
import { forestFonts } from "./Fonts";
import FooterBackground from "./FooterBackground";
import FooterText from "./FooterText";
import { footerConfig } from "./footerConfig";

export default function FooterPage() {
  return (
    <footer className={`${forestFonts} ${rc.footerSection}`}>
      <FooterBackground videoId={footerConfig.videoId} />

      <div className="absolute inset-0 bg-black/10" />

      <FooterText
        logoText={footerConfig.logoText}
        ctaText={footerConfig.ctaText}
        note={footerConfig.note}
      />
    </footer>
  );
}