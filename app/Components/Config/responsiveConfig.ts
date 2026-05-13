// app/Components/Config/responsiveConfig.ts

export const responsiveConfig = {
  desktopOnly: "hidden lg:block",
  mobileTabletOnly: "block lg:hidden",

  heroSection: "relative min-h-[100svh] w-full overflow-hidden lg:h-screen",

  sectionBase: "relative w-full overflow-hidden bg-[#1f2b14] text-[#f2dc78]",

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