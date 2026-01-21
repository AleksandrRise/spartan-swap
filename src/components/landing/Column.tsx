import Block from "./Block";
import type { BlockType } from "./BlockType";

type ColumnType = {
    blocks: BlockType[],
    direction: string,
    duration: number
}

export default function Column({ blocks, direction, duration = 25 }: ColumnType) {

    // Classes
    const columnClasses = "flex-1 overflow-hidden";
    const columnInnerClasses = "flex flex-col gap-3";

    const allBlocks = [...blocks, ...blocks, ...blocks];

    return (
    <div className={columnClasses}>
        <div
            className={columnInnerClasses}
            style={{
                animation: `scroll-${direction} ${duration}s linear infinite`,
            }}
        >
            {allBlocks.map((block, index) => (
                <Block key={`${block.imgSrc}-${index}`} imgSrc={block.imgSrc} imgAlt={block.imgAlt} />
            ))}
        </div>
    </div>
    );
    
};