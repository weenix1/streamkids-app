
import { Input } from "@material-tailwind/react";
import Box from "./Box";
import Text from "./Text";
import { ConfigBackGroundValues, ConfigColor, ConfigSize } from "../../types";

interface OtpProps {
  label?: OtpLabel;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor?: ConfigColor;
  width?: ConfigSize;
  islabel?: boolean;
}

type OtpLabel = {
  start: string;
  end: string;
}

const configSizeValues: Record<ConfigSize, string> = {
  xs: 'w-16',
  sm: 'w-60',
  md: 'w-80',
  lg: 'w-27',
  xl: 'w-full',
  '2xl': 'w-screen',
};

const Otp = ({ label = {
  start: 'OTP',
  end: 'Resend Code'
}, type, value, onChange, bgColor = 'white_text', width = 'xs', islabel = false }: OtpProps) => {

  const widthValue = width ? configSizeValues[width] : '';

  return (
    <Box flexJustifyContent="center" flexAlignItems="center" flexDirection="column" className="w-80">
      {islabel && <Box flexJustifyContent="between" className="w-full">
        <Text color='light_gray'>{label?.start}</Text>
        <Text color='light_gray'>{label?.end}</Text>
      </Box>}
      <Box flexJustifyContent="center" flexAlignItems="center" className="[&>*]:min-w-0 w-full gap-4" >
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={`${ConfigBackGroundValues[bgColor]} !${widthValue}`}
        />
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={`${ConfigBackGroundValues[bgColor]} !${widthValue}`}
        />
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={`${ConfigBackGroundValues[bgColor]} !${widthValue}`}
        />
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={`${ConfigBackGroundValues[bgColor]} !${widthValue}`}
        />
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={`${ConfigBackGroundValues[bgColor]} !${widthValue}`}
        />
      </Box>
    </Box>
  )
}

export default Otp;