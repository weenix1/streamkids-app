import { ConfigColor, ConfigTextValues } from "../../types";

interface PlayIconProps {
  size?: number;
  backgroundColor?: ConfigColor;
}

const PlayIcon = ({ size = 200, backgroundColor = 'blue-dark' }: PlayIconProps) => (
  <svg className={`fill-current ${ConfigTextValues[backgroundColor]}`} width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_188_1830)">
      <path d="M83.3327 137.5L133.333 100L83.3327 62.5003V137.5ZM99.9993 16.667C53.9993 16.667 16.666 54.0003 16.666 100C16.666 146 53.9993 183.334 99.9993 183.334C145.999 183.334 183.333 146 183.333 100C183.333 54.0003 145.999 16.667 99.9993 16.667ZM99.9993 166.667C63.2493 166.667 33.3327 136.75 33.3327 100C33.3327 63.2503 63.2493 33.3337 99.9993 33.3337C136.749 33.3337 166.666 63.2503 166.666 100C166.666 136.75 136.749 166.667 99.9993 166.667Z" />
    </g>
    <defs>
      <clipPath id="clip0_188_1830">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>


)

export default PlayIcon;