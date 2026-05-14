// app/Components/Footer/FooterBackground.tsx

type FooterBackgroundProps = {
  videoId: string;
};

export default function FooterBackground({ videoId }: FooterBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&playsinline=1`}
        title="Footer background video"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="eager"
        allowFullScreen={false}
        aria-hidden="true"
      />
    </div>
  );
}