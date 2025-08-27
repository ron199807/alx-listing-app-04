import Image from "next/image";

export const HeroImage = () => {
  return (
    <Image
      className="w-full max-w-6xl h-auto py-1 rounded-xl object-cover mx-auto"
      src="/assets/hero-section.png"
      alt="Beautiful vacation destinations"
      width={1200}
      height={600}
      priority
    />
  );
};