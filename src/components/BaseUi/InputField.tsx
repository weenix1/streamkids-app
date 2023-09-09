import React from 'react';
import {
  Input, Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import Text from './Text';
import { ConfigBackGroundValues, ConfigColor, ConfigPosition, ConfigSize } from '../../types';
import { useCountries } from "use-react-countries";

interface InputFieldProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  label?: string;
  width?: ConfigSize;
  iconPosition?: ConfigPosition;
  type?: 'text' | 'password' | 'email' | 'tel';
  bgColor?: ConfigColor;
}

const configSizeValues: Record<ConfigSize, string> = {
  xs: 'w-40',
  sm: 'w-60',
  md: 'w-80',
  lg: 'w-27',
  xl: 'w-full',
  '2xl': 'w-screen',
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  icon,
  label,
  width,
  iconPosition = 'end',
  type = 'text',
  bgColor = 'white_text',
}) => {

  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const alignmentStyles = {
    start: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      input: 'pl-8',
    },
    center: {
      icon: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      input: '',
    },
    end: {
      icon: 'absolute top-1/2 right-2 transform -translate-y-1/2',
      input: 'pr-8',
    },
  };

  const widthValue = width ? configSizeValues[width] : '';

  const selectedStyle = alignmentStyles[iconPosition] || alignmentStyles.end; // default to 'left' if no valid alignment provided

  return (
    <div className={`flex flex-col ${widthValue}`}>

      <Text color='black'>{label}</Text>
      <div className="relative flex flex-row items-center flex-1 w-full max-w-[24rem]">
        {type === 'tel' &&
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-4 w-4 rounded-full object-cover"
                />
                {countryCallingCode}
              </Button>
            </MenuHandler>
            <MenuList className="max-h-[20rem] max-w-[18rem]">
              {countries.map(({ name, flags, countryCallingCode }: { name: string, flags: any, countryCallingCode: any }, index: any) => {
                return (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        }
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={` ${selectedStyle.input} ${ConfigBackGroundValues[bgColor]}`}
        />
        {icon && <div className={selectedStyle.icon}>{icon}</div>}
      </div>
    </div>
  );
};

export default InputField;
