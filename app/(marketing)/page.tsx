import LandingLogo from "@/components/landing/LandingLogo";
import HeroSection from "@/components/landing/HeroSection";
import WireframePreview from "@/components/landing/WireframePreview";

export default function Home() {

  // Classes
  const mainClasses = "flex justify-between items-center overflow-hidden"
  const logoClasses = "w-1/2 p-10"
  const wireframeClasses = "w-3/7"

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