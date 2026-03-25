import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "../general/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./Particles";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      {/* Particles background */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Glow blob behind content */}
      <div
        className="absolute z-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, #312e81 60%, transparent 100%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div className="absolute z-10 flex flex-col items-center px-4 max-w-3xl text-center">

        {/* Line 1 — Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-gray-300 mb-2"
        >
          Hi, I&apos;m Kendrick Chandra
        </h1>

        {/* Line 2 — Role (AnimatedIntro) */}
        <AnimatedIntro />

        {/* Line 3 — Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="mb-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
        >
          Building scalable and reliable software solutions.
        </p>

        {/* CTA + Social links */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <LinkButton
            href="#projects"
            text="See My Work"
            icon={LuArrowRight}
            rounded
            animate
          />
        </div>
      </div>
    </section>
  );
}