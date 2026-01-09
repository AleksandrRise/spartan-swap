import LandingLogo from "@/components/landing/LandingLogo";
import HeroSection from "@/components/landing/HeroSection";
import WireframePreview from "@/components/landing/WireframePreview";

export default function Home() {

  // Classes
  const mainClasses = "flex justify-center items-center"
  const logoClasses = "w-1/2 p-10"
  const wireframeClasses = "w-1/2 overflow-hidden"

  return (

    <main className={mainClasses}>

      {/* Left side - Logo and Hero */}
      <div className={logoClasses}>
        <LandingLogo />
        <HeroSection />
      </div>

      {/* Right side - Wireframe */}
      <div className={wireframeClasses}>
        <WireframePreview />
      </div>

    </main>
  );
}