import MiddleCTAText from "./MiddleCTAText";
import MiddleCTAVideo from "./MiddleCTAVideo";
import { middleCTAConfig } from "./middleCTAConfig";

export default function MiddleCTAPage() {
  return (
    <section className="relative h-[42vh] min-h-[320px] overflow-hidden bg-[#1f2b14] text-[#f2dc78]">
      <MiddleCTAVideo src={middleCTAConfig.videoSrc} />

      <div className="absolute inset-0 bg-black/15" />

      <MiddleCTAText
        eyebrow={middleCTAConfig.eyebrow}
        leftText={middleCTAConfig.leftText}
        rightText={middleCTAConfig.rightText}
      />
    </section>
  );
}