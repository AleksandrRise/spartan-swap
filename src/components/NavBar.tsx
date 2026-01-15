import Image from "next/image"

export default function NavBar() {
    
    const NAV = [
        { href: "/", label: "Home" },
        { href: "/swaps", label: "Swaps" },
        { href: "/swapping-place", label: "SwappingPlace" },
        { href: "/contact", label: "Contact Us" },
    ];

    // Classes
    const linksListClasses = ""
    const logoSrc = "/images/logo-white.png"
    const logoAlt = "Logo"

    return (
        <nav>
            <Image src={logoSrc} alt={logoAlt} width={22.5} height={22.5} />

            <ul className={linksListClasses}>
                {NAV.map((item) => (
                    <li><a href={item.href}>{item.label}</a></li>
                ))}
            </ul>
        </nav>
    )
}