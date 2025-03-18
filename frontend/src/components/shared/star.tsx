import StarIcon from "@/icons/star-icon";
import clsx from "clsx";

interface StarProps {
  size?: number;
  color?: string;
  rating: number;
  className?: string;
}

export default function Star({ size = 20, rating, color = "#FFD700", className }: StarProps) {
  const totalStars = 5;

  return (
    <div className={clsx("flex gap-x-1 items-center", className)}>
      {Array.from({ length: totalStars }, (_, index: number) => {
        const isFilled = rating >= index + 1;
        return <StarIcon key={index} width={size} height={size} color={color} fill={isFilled ? color : "none"} />;
      })}
    </div>
  );
}
