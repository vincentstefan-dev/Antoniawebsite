// app/Components/Config/responsiveConfig.ts

export const responsiveConfig = {
  desktopOnly: "hidden lg:block",
  mobileTabletOnly: "block lg:hidden",

  heroSection: "relative min-h-[100svh] w-full overflow-hidden lg:h-screen",

  sectionBase: "relative w-full overflow-hidden bg-[#1f2b14] text-[#f2dc78]",

  footerSection:
    "relative h-[72svh] min-h-[520px] w-full overflow-hidden bg-[#1f2b14] text-[#f2dc78] lg:h-[70vh] lg:min-h-[440px]",

  footerLogoTop:
    "absolute left-[5%] top-[5%] w-[1200px] whitespace-nowrap text-[clamp(6rem,18vw,22rem)] font-normal leading-[0.65] tracking-[-0.02em] lg:text-[clamp(11rem,18vw,22rem)]",

  footerLogoBottom:
    "absolute left-[10%] top-[35%] w-[1400px] whitespace-nowrap text-[clamp(6rem,18vw,22rem)] font-normal italic leading-[0.65] tracking-[-0.01em] lg:top-[42%] lg:text-[clamp(11rem,18vw,22rem)]",

  footerBadge:
    "absolute left-[50%] top-[66%] inline-flex -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border-[3px] border-[#f2dc78] px-5 py-[0.14rem] text-[#f2dc78] lg:left-[57%] lg:top-[75%] lg:translate-x-0 lg:border-[4px] lg:px-7 lg:py-[0.18rem]",

  footerCTA:
    "absolute bottom-[7%] left-1/2 w-[88%] max-w-[520px] -translate-x-1/2 text-center text-[#f2dc78] lg:bottom-[8%] lg:left-auto lg:right-[1%] lg:w-[680px] lg:max-w-[680px] lg:translate-x-0 lg:text-right",

  fullScreenSection:
    "relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#1f2b14] text-[#f2dc78]",

  standardSection:
    "relative w-full overflow-hidden bg-[#1f2b14] px-6 py-16 text-[#f2dc78] md:px-12 lg:px-20",

  compactVideoSection:
    "relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[#1f2b14] text-[#f2dc78]",

  contentContainer: "mx-auto w-full max-w-[1180px]",

  twoColumnGrid:
    "grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]",

  threeColumnGrid: "grid gap-8 md:grid-cols-3",

  mobileTabletPadding: "px-6 md:px-12",
  desktopPadding: "lg:px-20",

  mobileTabletTextCenter: "text-center",
  desktopTextCenter: "text-center",

  headingLarge:
    "text-[clamp(3rem,6vw,5.5rem)] leading-[0.82] tracking-[-0.08em]",

  headingSection:
    "text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-[-0.08em]",

  bodyText:
    "text-[clamp(1rem,1.35vw,1.25rem)] font-bold leading-[1.22] tracking-[-0.05em]",

  cardTitle:
    "text-[clamp(1.7rem,2.4vw,2.4rem)] font-semibold leading-none tracking-[-0.06em]",

  cardText:
    "text-[clamp(1.05rem,1.5vw,1.35rem)] font-bold leading-[1.15] tracking-[-0.05em]",

  ctaText:
    "text-[clamp(2.8rem,5vw,5rem)] font-semibold italic leading-[0.72] tracking-[-0.07em]",

  fontCormorant: {
    fontFamily: "var(--font-cormorant)",
  },
};