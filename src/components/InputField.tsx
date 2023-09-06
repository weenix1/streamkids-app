import React from 'react';
import { Input } from '@material-tailwind/react';
import Text from './Text';
import { ConfigPosition, ConfigSize } from '../types';

interface InputFieldProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  label?: string;
  width?: ConfigSize;
  iconPosition?: ConfigPosition;
}

const configSizeValues: Record<ConfigSize, string> = {
  xs: 'w-40',
  sm: 'w-60',
  md: 'w-80',
  lg: 'w-760',
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
}) => {
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
      <div className="relative flex flex-row items-center flex-1">
        <Input
          type="text"
          value={value}
          onChange={onChange}
          className={` ${selectedStyle.input}`}
        />
        {icon && <div className={selectedStyle.icon}>{icon}</div>}
      </div>
    </div>
  );
};

export default InputField;
