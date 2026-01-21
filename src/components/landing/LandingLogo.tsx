import Image from "next/image"


export default function LandingLogo() {

    // Classes
    const titleLogo = "flex items-center gap-3"
    const logoSrc = "/images/spartan-logo.png"
    const logoText = "text-black text-5xl text-[#0A2E5C]"
    const logoSpartanText = "text-primary"
    const logoAlt = "Logo"

    return (
        <div className={titleLogo}>
            <Image src={logoSrc} alt={logoAlt} width={100} height={100} priority />
            <h2 className={logoText}><span className={logoSpartanText}>Spartan</span> Swap</h2>
        </div>
    )
}