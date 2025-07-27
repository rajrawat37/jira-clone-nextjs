import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical";
}

export const DottedSeparator = ({
    className,
    color = "#a1a1aa", 
    height = "2px",
    dotSize = "3px", // Increased from 2px to 3px for better visibility
    gapSize = "6px",
    direction = "horizontal",
}: DottedSeparatorProps) => {
    const isHorizontal = direction === "horizontal";
    
    return (
        <div 
            className={cn(
                isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",
                className
            )}
        >
            <div 
                className={isHorizontal ? "flex-grow" : "flex-grow-0"} // `flex-grow` is used to make the separator take up the remaining space, while `flex-grow-0` is used to make the separator take up the full height or width.
                style={{
                    width: isHorizontal ? "100%" : height,
                    height: isHorizontal ? height : "100%",
                    backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`, //Creates tiny circular dots using a CSS radial gradient.
                    backgroundSize: isHorizontal 
                        ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` //The size of the dot and the gap combined.
                        : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`, 
                    backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y", //The background repeats in the horizontal or vertical direction.
                    backgroundPosition: "center", //The background is centered in the container.
                }}
            />
        </div>
    );
};