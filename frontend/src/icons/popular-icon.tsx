import { IconProps } from "./definition";

export default function PopularIcon({ width, height, className, fill = "#4A4A4A" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} className={className} viewBox="0 -960 960 960" width={width} fill={fill}>
      <path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
}
