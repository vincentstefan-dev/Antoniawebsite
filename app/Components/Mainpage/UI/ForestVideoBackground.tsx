type ForestVideoBackgroundProps = {
  videoSrc: string;
};

export default function ForestVideoBackground({
  videoSrc,
}: ForestVideoBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <video
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    </div>
  );
}