// app/Components/Footer/FooterBackground.tsx

type FooterBackgroundProps = {
  src: string;
};

export default function FooterBackground({ src }: FooterBackgroundProps) {
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