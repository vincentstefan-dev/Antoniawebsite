export default function ForestOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-[#f2dc78]/10" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-[#102a12]/20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,244,190,0.28)_0%,rgba(255,244,190,0.12)_32%,transparent_62%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_100%)]" />
    </>
  );
}