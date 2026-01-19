import Block from "./Block";

type ColumnType = {
    blocks: string[],
    direction: string,
    duration: number
}

export default function Column({ blocks, direction, duration = 25 }: ColumnType) {

    // Classes
    const columnClasses = "flex-1 overflow-hidden";
    const columnInnerClasses = "flex flex-col gap-3";

    const allBlocks = [...blocks, ...blocks];

    return (
    <div className={columnClasses}>
        <div
            className={columnInnerClasses}
            style={{
                animation: `scroll-${direction} ${duration}s linear infinite`,
            }}
        >
            {allBlocks.map((label, index) => (
                <Block key={`${label}-${index}`} label={label} />
            ))}
        </div>
    </div>
    );
    
};