import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Revolutionizing Finance Through Blockchain",
  subtitle = "Secure, transparent, and efficient Bitcoin solutions for businesses and individuals. Join the future of decentralized finance today.",
}: HeroSectionProps) => {
  return (
    <section className="flex content-end flex-wrap relative w-full min-h-[80vh] bg-transparent text-foreground overflow-hidden">
      <div className="px-8 py-6 md:px-12 md:py-10 lg:px-14 lg:py-12 z-10">
        <div className="flex flex-col gap-12 max-w-3xl h-full">
          <h1 className="text-6xl md:text-7xl lg:text-8xl">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-foreground-secondary">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
