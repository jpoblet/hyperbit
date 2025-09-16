import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import GradientBackground from "./GradientBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* New Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <GradientBackground />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="section-one" className="bg-background-secondary min-h-96">
          SECTION ONE
        </section>
        <section id="section-two" className="bg-background min-h-96">
          SECTION TWO
        </section>
        <section
          id="section-three"
          className="bg-background-secondary min-h-96"
        >
          SECTION THREE
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-inverse text-foreground-inverse min-h-40 py-12">
        FOOTER
      </footer>
    </div>
  );
};

export default HomePage;
