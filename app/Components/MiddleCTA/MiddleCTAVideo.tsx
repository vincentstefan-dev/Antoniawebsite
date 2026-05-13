type MiddleCTAVideoProps = {
  src: string;
};

export default function MiddleCTAVideo({ src }: MiddleCTAVideoProps) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}