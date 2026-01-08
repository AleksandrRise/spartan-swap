import Image from "next/image"


export default function LandingLogo() {

    // Classes
    const titleLogo = "flex items-center gap-3"
    const logoSrc = "/images/logo-white.png"
    const logoText = "text-black"
    const logoSpartanText = "text-[#0055A2]"
    const logoAlt = "Logo"

    return (
        <div className={titleLogo}>
            <Image src={logoSrc} alt={logoAlt} width={100} height={100} priority />
            <h2 className={logoText}><span className={logoSpartanText}>Spartan</span> Swap</h2>
        </div>
    )
}