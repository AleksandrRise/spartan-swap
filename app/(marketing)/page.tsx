import LandingLogo from "@/components/landing/LandingLogo";
import HeroSection from "@/components/landing/HeroSection";
import WireframePreview from "@/components/landing/WireframePreview";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {

  // Classes
  const mainClasses = "flex justify-between items-center h-screen overflow-hidden"
  const logoClasses = "w-1/2 ml-25"
  const wireframeClasses = "w-3/7 h-full"

  return (

    <main className={mainClasses}>

      {/* Left side - Logo and Hero */}
      <div className={logoClasses}>
        <LandingLogo />
        <HeroSection />
        <FooterSection />
      </div>

      {/* Right side - Wireframe */}
      <div className={wireframeClasses}>
        <WireframePreview />
      </div>

    </main>
  );
}