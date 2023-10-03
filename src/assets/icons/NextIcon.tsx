import { ConfigColor, ConfigTextValues } from "../../types";

interface NextIconProps {
  size?: number;
  backgroundColor?: ConfigColor;
}

const NextIcon = ({ size = 150, backgroundColor = 'blue-dark' }: NextIconProps) => (
  <svg className={`fill-current ${ConfigTextValues[backgroundColor]}`} width={size} height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_787_2148)">
      <path d="M37.5 112.5L90.625 75L37.5 37.5V112.5ZM50 61.625L68.9375 75L50 88.375V61.625ZM100 37.5H112.5V112.5H100V37.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_787_2148">
        <rect width="150" height="150" fill="white" />
      </clipPath>
    </defs>
  </svg>


)

export default NextIcon;