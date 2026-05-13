import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="min-h-screen bg-[#1f2b14] px-6 py-16 text-[#f2dc78] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-[520px]">
          <h2
            className="mb-8 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.82] tracking-[-0.08em]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            My journey
            <br />
            started here
          </h2>

          <div
            className="space-y-7 text-[clamp(1rem,1.35vw,1.25rem)] font-bold leading-[1.22] tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <p>
              6 years ago I used to edit videos the way many others do: clean,
              fast, done.
              <br />
              At some point, I noticed something that stayed with me. My clients
              had good-looking videos... yet their audience didn’t act. No
              trust. No real connection. Not the level of sales they were hoping
              for.
            </p>

            <p>
              Today I see video editing through a different lens: the science of
              viewer psychology, which allows me to build an invisible bridge
              between what you want to express and what your audience is
              actually able to feel, trust &amp; act on.
            </p>

            <p>
              This is the path that led me here:
              <br />
              • 6 years of experience as a video editor
              <br />
              • 100% Job Success Score on Upwork
              <br />• Dozens of projects with founders, experts &amp; premium
              brands
            </p>

            <p>
              No trend-driven effects. No empty aesthetics.
              <br />
              Just videos rooted in understanding — designed to turn attention
              into trust &amp; trust into action.
            </p>
          </div>
        </div>

        <div className="relative mt-4 w-full overflow-hidden lg:mt-24">
          <Image
            src="/images/about-antonia.jpg"
            alt="Antonia standing in a green field"
            width={760}
            height={760}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}