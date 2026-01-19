type BlockType = {
    label: string;
}

export default function Block({ label }: BlockType) {

    // Classes
    const blockClasses =
        "bg-gray-100 border border-gray-200 rounded-lg px-4 py-10 text-center whitespace-pre-line";
    const blockLabelClasses =
        "text-[11px] font-medium tracking-wide text-gray-400 uppercase";

    return (
        <div className={blockClasses}>
            <span className={blockLabelClasses}>{label}</span>
        </div>
    )
};