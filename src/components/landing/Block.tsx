import Image from "next/image"

type BlockType = {
    imgSrc: string;
    imgAlt: string;
}

export default function Block({ imgSrc, imgAlt }: BlockType) {

    // Classes
    const imgClasses =
        "bg-gray-100 border border-gray-200 text-center whitespace-pre-line";

    return (
        <Image width={32} height={64} className={imgClasses} src={imgSrc} alt={imgAlt} />
    )
};