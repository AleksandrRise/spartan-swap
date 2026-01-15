import Image from "next/image"

export default function NavBar() {
    
    const NAV = [
        { href: "/", label: "Home" },
        { href: "/swaps", label: "Swaps" },
        { href: "/swapping-place", label: "SwappingPlace" },
        { href: "/contact", label: "Contact Us" },
    ];

    // Classes
    const navClasses = "flex justify-between"
    const linksListClasses = "flex gap-5"
    const logoSrc = "/images/logo-white.png"
    const logoAlt = "Logo"
    const profileLink = ""

    return (
        <nav className={navClasses}>
            <Image src={logoSrc} alt={logoAlt} width={22.5} height={22.5} />

            <ul className={linksListClasses}>
                {NAV.map((item) => (
                    <li><a href={item.href}>{item.label}</a></li>
                ))}
            </ul>

            <a href={profileLink}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 21a8 8 0 1 0-16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
            </a>
        </nav>
    )
}