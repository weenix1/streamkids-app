import { ConfigColor, ConfigTextValues } from "../../types";

interface SkipIconProps {
  size?: number;
  backgroundColor?: ConfigColor;
}

const SkipIcon = ({ size = 150, backgroundColor = 'blue-dark' }: SkipIconProps) => (
  <svg className={`fill-current ${ConfigTextValues[backgroundColor]}`} width={size} height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_787_2149)">
      <path d="M112.5 112.5L59.375 75L112.5 37.5V112.5ZM100 61.625L81.0625 75L100 88.375V61.625ZM50 37.5H37.5V112.5H50V37.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_787_2149">
        <rect width="150" height="150" fill="white" transform="matrix(-1 0 0 1 150 0)" />
      </clipPath>
    </defs>
  </svg>

)

export default SkipIcon;