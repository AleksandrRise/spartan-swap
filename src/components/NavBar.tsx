import Image from "next/image"

export default function NavBar() {

    // Classes
    const logoSrc = "/images/logo-white.png"
    const logoAlt = "Logo"

    return (
        <nav>
            <Image src={logoSrc} alt={logoAlt} width={22.5} height={22.5} />
        </nav>
    )
}