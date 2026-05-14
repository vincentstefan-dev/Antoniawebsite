"use client";

import { responsiveConfig as rc } from "../Config/responsiveConfig";
import { forestFonts } from "./Fonts/forestFonts";
import { forestHomeConfig } from "./Configforest/forestHomeConfig";

import ForestVideoBackground from "./UI/ForestVideoBackground";
import ForestOverlay from "./UI/ForestOverlay";

import MainNavDesktop from "./UI/Desktop/MainNavDesktop";
import ForestHeroTextDesktop from "./UI/Desktop/ForestHeroTextDesktop";
import InquiryBlockDesktop from "./UI/Desktop/InquiryBlockDesktop";
import BottomCTADesktop from "./UI/Desktop/BottomCTADesktop";

import MainNavMobile from "./UI/Mobile/MainNavMobile";
import ForestHeroTextMobile from "./UI/Mobile/ForestHeroTextMobile";
import InquiryBlockMobile from "./UI/Mobile/InquiryBlockMobile";
import BottomCTAMobile from "./UI/Mobile/BottomCTAMobile";

export default function Homepage() {
  return (
    <main
      className={`${forestFonts} relative min-h-screen w-full overflow-x-hidden bg-black`}
    >
      <section className={rc.heroSection}>
        <ForestVideoBackground
          videoId={forestHomeConfig.videoId}
        />

        <ForestOverlay />

        <div className={rc.desktopOnly}>
          <MainNavDesktop items={forestHomeConfig.navItems} />

          <ForestHeroTextDesktop
            heroText={forestHomeConfig.heroText}
            insideHref={forestHomeConfig.links.insideHref}
          />

          <InquiryBlockDesktop
            inquiry={forestHomeConfig.inquiry}
          />

          <BottomCTADesktop
            text={forestHomeConfig.cta.bottomText}
          />
        </div>

        <div className={rc.mobileTabletOnly}>
          <MainNavMobile items={forestHomeConfig.navItems} />

          <ForestHeroTextMobile
            heroText={forestHomeConfig.heroText}
            insideHref={forestHomeConfig.links.insideHref}
          />

          <InquiryBlockMobile
            inquiry={forestHomeConfig.inquiry}
          />

          <BottomCTAMobile
            text={forestHomeConfig.cta.bottomText}
          />
        </div>
      </section>
    </main>
  );
}